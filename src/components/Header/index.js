import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  Container,
  LogoLink,
  LogoImage,
  CartCounter,
  Counter,
  CounterText,
} from './styles';

const Header = ({ navigation }) => {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Wrapper>
      <Container>
        <LogoLink onPress={() => navigation.navigate('Main')}>
          <LogoImage />
        </LogoLink>

        <CartCounter onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <Counter>
            <CounterText>{cartSize}</CounterText>
          </Counter>
        </CartCounter>
      </Container>
    </Wrapper>
  );
};

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Header;
