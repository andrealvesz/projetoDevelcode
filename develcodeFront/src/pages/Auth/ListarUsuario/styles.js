import styled from 'styled-components';
import { Colors } from '../../../config/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background};
`;

export const TitleArea = styled.View`
  justify-content: center;
  flex: 0.5;
  padding: 0 0 0 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Montserrat-SemiBold';
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const InputArea = styled.View`
  margin: 8px 16px;
`;

export const CreateAccount = styled.Text`
  margin: 8px 16px;
  text-align: center;
  color: ${props => `${props.color}`};
  font-family: ${props =>
    `${props.isFontBold ? 'Montserrat-SemiBold' : 'Montserrat-Regular'}`};
`;
