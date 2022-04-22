import styled from 'styled-components';
import { Colors } from '../../../config/Colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${Colors.background};
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 80%;
  aspect-ratio: 1;
`;
