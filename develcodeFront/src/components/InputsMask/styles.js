import styled from 'styled-components';
import { Colors } from '../../config/Colors';

export const InputArea = styled.View`
  flex-direction: row;
  height: 55px;
  padding-left: 8px;
  border-radius: 8px;
  background-color: ${props => `${props.backgroundColor}`};
  border: ${props => `${props.borderWidth ? props.borderWidth : 1}px`} solid
    ${props => props.borderColor};
  align-items: center;
  /* flex: 1; */
`;
