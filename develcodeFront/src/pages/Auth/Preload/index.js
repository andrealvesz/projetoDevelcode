import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Logo } from './styles';
import { Colors } from '../../../config/Colors';
import { Loading } from '../../../components/Loading';

export const Preload = () => {
  const { navigate } = useNavigation();

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    setTimeout(() => {
      navigate('SignIn');
    }, 2000);
  };

  return (
    <Container>
      <Logo source={require('../../../assets/images/logo.png')} />
      <Loading size={24} color={Colors.primary} />
    </Container>
  );
};
