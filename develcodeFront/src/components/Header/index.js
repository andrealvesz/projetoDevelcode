import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  IconArea,
  LogoArea,
  LogoImg,
  HeaderTitle,
  HeaderViewTitle,
} from './styles';
import { Colors } from '../../config/Colors';

export const Header = ({ bgColor, backIcon, Logo, title }) => {
  const { goBack } = useNavigation();

  return (
    <Container color={bgColor}>
      {backIcon && (
        <IconArea onPress={() => goBack()}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={20}
            color={Colors.dark}
          />
        </IconArea>
      )}

      {Logo && (
        <LogoArea style={{ paddingVertical: 16, height: 200 }}>
          <Logo width="100%" height="100%" />
        </LogoArea>
      )}

      {title && (
        <HeaderViewTitle>
          <HeaderTitle>{title}</HeaderTitle>
        </HeaderViewTitle>
      )}
    </Container>
  );
};
