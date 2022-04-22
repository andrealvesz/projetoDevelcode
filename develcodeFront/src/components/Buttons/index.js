import React from 'react';
import { Colors } from '../../config/Colors';
import { Container, ButtonText, Loading } from './styles';

export const Button = ({ title, onPress, color, loading }) => {
  return (
    <>
      {loading ? (
        <Container onPress={onPress} color={color}>
          <Loading color={Colors.background} size={16} />
        </Container>
      ) : (
        <Container onPress={onPress} color={color}>
          <ButtonText>{title}</ButtonText>
        </Container>
      )}
    </>
  );
};