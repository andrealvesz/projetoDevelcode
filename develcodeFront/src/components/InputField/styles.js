import styled from 'styled-components';
import { Colors } from '../../config/Colors';

export const Container = styled.View`
  background-color: ${props => `${props.backgroundColor}`};
  padding-left: 8px;
  border-radius: 8px;
  border: ${props => `${props.borderWidth ? props.borderWidth : 1}px`} solid
    ${props => props.borderColor};
  width: 100%;
  height: 55px;
  flex-direction: row;
  align-items: center;
`;

export const IconArea = styled.View`
  margin: 0 8px;
`;

export const TextInput = styled.TextInput`
  color: ${Colors.dark};
  flex: 1;
  font-family: 'Montserrat-Medium';
`;

export const ButtonSearchArea = styled.TouchableOpacity`
  padding: 10px;
  margin-right: 15px;
  background: ${Colors.gradientForeground};
  border-radius: 6px;
`;
export const ButtonSearchText = styled.Text`
  font-size: 14px;
  font-family: 'Montserrat-Medium';
  color: ${Colors.gradientForeground};
`;
