import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding-top: 20px;
`;

export const Product = styled.View`
  width: 220px;
  border-radius: 4px;
  background-color: #fff;
  padding: 10px;
  margin-right: 15px;
  margin-left: ${props => (props.first ? '20px' : '0px')};
  margin-bottom: 15px;
`;

export const ProductImage = styled.Image.attrs(({ image }) => ({
  source: { uri: image },
  resizeMode: 'cover',
}))`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;

export const ProductInfos = styled.View`
  padding: 0 10px;
  margin-bottom: 10px;
`;

export const ProductTitle = styled.Text.attrs(() => ({
  numberOfLines: 2,
}))`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: #000;
`;

export const ProductButtonAdd = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  background-color: ${colors.sunflower.c};
  height: 42px;
  border-radius: 4px;
  overflow: hidden;
  margin-top: auto;
`;

export const ProductButtonAddCounter = styled.View`
  flex-basis: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${darken(0.1, colors.sunflower.c)};
`;

export const ProductButtonAddCounterText = styled.Text`
  font-size: 14px;
  color: #fff;
  margin-left: 5px;
`;

export const ProductButtonAddText = styled.Text`
  flex: 1;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
`;
