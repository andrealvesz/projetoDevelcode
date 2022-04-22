import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Content, CreateAccount } from './styles';

import { Header } from '../../../components/Header';
import { Colors } from '../../../config/Colors';

export const ListarUsuario = () => {
  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <Container>
      <Header title="Usuários Cadastrados" />

      <Content>
        <CreateAccount color={Colors.primary} isFontBold={false}>
          Ainda não existe nenhum usuário cadastrado{'\n\n'}
          <CreateAccount
            color={Colors.primary}
            isFontBold={true}
            onPress={() => {
              navigate('SignUp');
              setSelected('');
            }}>
            Cadastre aqui
          </CreateAccount>
        </CreateAccount>
      </Content>
    </Container>
  );
};
