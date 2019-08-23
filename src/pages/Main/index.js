import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../utils/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Product,
  ProductImage,
  ProductInfos,
  ProductTitle,
  ProductPrice,
  ProductButtonAdd,
  ProductButtonAddText,
  ProductButtonAddCounter,
  ProductButtonAddCounterText,
} from './styles';

const Main = () => {
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const findProducts = async () => {
    await api.get('/products').then(response => {
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    });
  };

  useEffect(() => {
    findProducts();
  }, []);

  const add = id => {
    dispatch(CartActions.addToCartRequest(id));
  };

  const renderProduct = ({ item, index }) => {
    const { id, image, title, priceFormatted } = item;

    return (
      <Product first={index === 0}>
        <ProductImage image={image} />

        <ProductInfos>
          <ProductTitle>{title}</ProductTitle>
          <ProductPrice>{priceFormatted}</ProductPrice>
        </ProductInfos>

        <ProductButtonAdd onPress={() => add(id)}>
          <ProductButtonAddCounter>
            <Icon name="add-shopping-cart" color="#fff" size={20} />
            <ProductButtonAddCounterText>
              {amount[id] || 0}
            </ProductButtonAddCounterText>
          </ProductButtonAddCounter>

          <ProductButtonAddText>Adicionar</ProductButtonAddText>
        </ProductButtonAdd>
      </Product>
    );
  };

  return (
    <Container>
      <FlatList
        data={products}
        renderItem={renderProduct}
        extraData={amount}
        keyExtractor={item => String(item.id)}
        horizontal
      />
    </Container>
  );
};

Main.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    priceFormatted: PropTypes.string.isRequired,
  }),
};

Main.defaultProps = {
  item: {
    id: 1,
    image: '',
    title: 'Product Name',
    price: 100.0,
    priceFormatted: 'R$100,00',
  },
};

export default Main;
