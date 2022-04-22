import styled from 'styled-components';
import { StyleSheet } from 'react-native';
import { Colors } from '../../../config/Colors';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${Colors.background};
`;

export const ButtonImg = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  height: 130px;
  width: 130px;
  border-radius: 65px;
  overflow: hidden;
  margin: 5px 0;
  background: ${Colors.lightGray};
  align-self: center;
`;

export const ImageUser = styled.Image.attrs({
  // resizeMode: 'contain',
})`
  width: 100%;
  aspect-ratio: 1;
`;

export const TitleArea = styled.View`
  justify-content: center;
  flex: 1;
  margin: 32px 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: 'Montserrat-SemiBold';
`;

export const CenterContent = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${Colors.background};
  /* justify-content: center; */
  /* margin-bottom: 50px; */
`;

export const InputArea = styled.View`
  margin: 8px 16px;
`;

export const SignInAccount = styled.Text`
  text-align: center;
  color: ${Colors.background};
  font-family: 'Montserrat-Regular';
`;