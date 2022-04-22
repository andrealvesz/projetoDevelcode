import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container } from './styles';

export const Loading = ({size, color}) => {
  return (
    <Container>
      <ActivityIndicator size={size} color={color} />
    </Container>
  );
};
