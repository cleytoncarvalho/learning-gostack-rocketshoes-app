import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ButtonCkeckout,
  ButtonCkeckoutText,
  Products,
  Product,
  ProductImage,
  ProductHeader,
  ProductInfos,
  ProductTitle,
  ProductPrice,
  ProductBtnRemove,
  ProductBtnRemoveIcon,
  ProductFooter,
  ProductQtd,
  ProductQtdBtn,
  ProductQtdBtnIcon,
  ProductQtdValue,
  ProductTotal,
  CartTotal,
  CartTotalLabel,
  CartTotalValue,
  CartEmpty,
  CartEmptyIcon,
  CartEmptyText,
  ButtonHome,
  ButtonHomeText,
} from './styles';

const Cart = ({ navigation }) => {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotalFormatted: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  const remove = id => {
    dispatch(CartActions.removeFromCart(id));
  };

  const decrement = ({ id, amount }) => {
    dispatch(CartActions.updateAmountRequest(id, amount - 1));
  };

  const increment = ({ id, amount }) => {
    dispatch(CartActions.updateAmountRequest(id, amount + 1));
  };

  const renderProduct = ({ item }) => {
    const {
      id,
      image,
      title,
      priceFormatted,
      amount,
      subtotalFormatted,
    } = item;

    return (
      <Product>
        <ProductHeader>
          <ProductImage image={image} />

          <ProductInfos>
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>{priceFormatted}</ProductPrice>
          </ProductInfos>

          <ProductBtnRemove onPress={() => remove(id)}>
            <ProductBtnRemoveIcon />
          </ProductBtnRemove>
        </ProductHeader>

        <ProductFooter>
          <ProductQtd>
            <ProductQtdBtn onPress={() => decrement(item)}>
              <ProductQtdBtnIcon name="remove-circle-outline" />
            </ProductQtdBtn>

            <ProductQtdValue>{amount}</ProductQtdValue>

            <ProductQtdBtn onPress={() => increment(item)}>
              <ProductQtdBtnIcon name="add-circle-outline" />
            </ProductQtdBtn>
          </ProductQtd>

          <ProductTotal>{subtotalFormatted}</ProductTotal>
        </ProductFooter>
      </Product>
    );
  };

  return (
    <Container>
      {products.length ? (
        <>
          <Products>
            <FlatList
              data={products}
              renderItem={renderProduct}
              keyExtractor={item => String(item.id)}
            />
          </Products>

          <CartTotal>
            <CartTotalLabel>Total</CartTotalLabel>
            <CartTotalValue>{total}</CartTotalValue>
          </CartTotal>

          <ButtonCkeckout>
            <ButtonCkeckoutText>Finalizar Pedido</ButtonCkeckoutText>
          </ButtonCkeckout>
        </>
      ) : (
        <>
          <CartEmpty>
            <CartEmptyIcon />
            <CartEmptyText>Seu carrinho está vazio.</CartEmptyText>
          </CartEmpty>

          <ButtonHome onPress={() => navigation.navigate('Main')}>
            <ButtonHomeText>Ver Produtos</ButtonHomeText>
          </ButtonHome>
        </>
      )}
    </Container>
  );
};

Cart.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    priceFormatted: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    subtotalFormatted: PropTypes.string.isRequired,
  }),
};

Cart.defaultProps = {
  item: {
    id: 1,
    image: '',
    title: 'Product Name',
    priceFormatted: 'R$100,00',
    amount: 1,
    subtotalFormatted: 'R$100,00',
  },
};

export default Cart;
