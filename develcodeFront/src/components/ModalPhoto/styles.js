import styled from 'styled-components';
import { Colors } from '../../config/Colors';

export const ModalContainer = styled.View`
  background-color: ${Colors.primary};
  padding: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Options = styled.TouchableOpacity`
  padding: 16px;
`;

export const OptionsText = styled.Text`
  text-align: center;
  font-family: 'Montserrat-SemiBold';
  font-size: 15px;
  color: ${Colors.fontPrimary};
`;
