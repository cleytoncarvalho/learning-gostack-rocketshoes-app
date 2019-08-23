import styled from 'styled-components/native';

import colors from '../../styles/colors';
import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0 0 auto;
  background-color: ${colors.mint.c};
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const LogoLink = styled.TouchableOpacity``;

export const LogoImage = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const CartCounter = styled.TouchableOpacity`
  margin-top: 5px;
  position: relative;
`;

export const Counter = styled.View`
  position: absolute;
  top: -8px;
  right: -8px;
  min-width: 50px;
  height: 18px;
  overflow: hidden;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CounterText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 11px;
  background-color: ${colors.sunflower.c};
  padding: 2px 6px;
  line-height: 14px;
  border-radius: 9px;
`;
