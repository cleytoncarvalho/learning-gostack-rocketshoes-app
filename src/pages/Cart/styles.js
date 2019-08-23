import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';

export const Container = styled.View`
  margin: 20px;
  background-color: #fff;
  padding: 15px;
  border-radius: 4px;
`;

export const Products = styled.View`
  flex: 1 1 auto;
`;

export const Product = styled.View``;

export const ProductHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
`;

export const ProductImage = styled.Image.attrs(({ image }) => ({
  source: {
    uri: image,
  },
  resizeMode: 'cover',
}))`
  width: 80px;
  height: 80px;
`;

export const ProductInfos = styled.View`
  flex: 1;
  padding: 0 10px;
`;

export const ProductTitle = styled.Text.attrs(() => ({
  numberMaxOfLines: 2,
}))`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const ProductBtnRemove = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductBtnRemoveIcon = styled(Icon).attrs(() => ({
  name: 'delete-forever',
  color: colors.sunflower.c,
  size: 25,
}))``;

export const ProductFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #eee;
  padding: 10px;
`;

export const ProductQtd = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductQtdBtn = styled.TouchableOpacity``;

export const ProductQtdBtnIcon = styled(Icon).attrs(({ name }) => ({
  name,
  color: colors.sunflower.c,
  size: 25,
}))``;

export const ProductQtdValue = styled.Text`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 3px 15px;
  font-size: 14px;
  color: #666;
  margin: 0 5px;
`;

export const ProductTotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const CartTotal = styled.View`
  align-items: center;
  margin: 30px 0;
`;

export const CartTotalLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
`;

export const CartTotalValue = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #000;
`;

export const ButtonCkeckout = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${colors.sunflower.c};
  height: 42px;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
`;

export const ButtonCkeckoutText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
`;

export const CartEmpty = styled.View`
  align-items: center;
  padding: 20px 10px;
`;

export const CartEmptyIcon = styled(Icon).attrs(() => ({
  name: 'remove-shopping-cart',
  color: '#555',
  size: 60,
}))``;

export const CartEmptyText = styled.Text`
  font-size: 15px;
  color: #333;
  margin-top: 15px;
`;

export const ButtonHome = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: ${colors.sunflower.c};
  height: 42px;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
`;

export const ButtonHomeText = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
`;
