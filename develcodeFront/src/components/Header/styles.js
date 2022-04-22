import styled from 'styled-components';
import { Colors } from '../../config/Colors';

export const Container = styled.SafeAreaView`
  flex-direction: row;
  width: 100%;
  background-color: ${props => props.color};
  padding-top: 20px;
`;

export const IconArea = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  bottom: 20px;
  left: 25px;
  z-index: 999;
`;

export const LogoArea = styled.View`
  width: 100%;
`;

export const LogoImg = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  aspect-ratio: 1.3;
`;

export const HeaderViewTitle = styled.View`
  width: 100%;
  padding: 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 22px;
  text-align: center;
  font-family: 'Montserrat-Medium';
  color: ${props => (props.color ? props.color : Colors.fontSecondary)};
`;