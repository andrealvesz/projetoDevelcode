import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${props => `${props.color}`};
  margin: 8px 16px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${Colors.background};
  padding: 16px 8px;
  font-family: 'Montserrat-Medium';
`;

export const Loading = styled.ActivityIndicator`
  padding: 16px;
`;
