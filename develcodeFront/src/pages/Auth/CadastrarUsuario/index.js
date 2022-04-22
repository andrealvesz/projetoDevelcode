import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { request, PERMISSIONS } from 'react-native-permissions';

import {
  Container,
  ButtonImg,
  ImageUser,
  InputArea,
  Content,
  SignInAccount,
} from './styles';
import { Colors } from '../../../config/Colors';
import { avatarUser } from '../../../config/GlobalURLs';

import { Inputs } from '../../../components/InputField';
import { InputMask } from '../../../components/InputsMask';
import { Button } from '../../../components/Buttons';
import { Scroller } from '../../../components/Scroller';
import { Header } from '../../../components/Header';
import { ModalPhoto } from '../../../components/ModalPhoto';

export const CadastrarUsuario = () => {
  const { navigate } = useNavigation();

  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selected, setSelected] = useState('');
  const [user, setUser] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const [dataNascimento, setDataNascimento] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState('');
  const [codigo, setCodigo] = useState('');

  const addFoto = async () => {
    setLoading(true);
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await apiParticipante.photoUser(image, token);
      console.log('RESPONSE:ADD:IMG::\n\n', JSON.stringify(response.data.foto));
      if (response.success) {
        setImage('');
        dispatch({
          type: 'SET_FOTO',
          payload: response.data.foto,
        });
        Alert.alert('Sucesso', 'Foto adicionada com sucesso!');
        goBack();
      } else {
        Alert.alert('Falha', response.errors[0]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCamera = async () => {
    try {
      const req = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.CAMERA
          : PERMISSIONS.ANDROID.CAMERA,
      );

      if (req === 'granted') {
        launchCamera(
          { mediaType: 'photo', maxHeight: 720, maxWidth: 720 },
          imageObj => {
            if (imageObj.didCancel) {
              return;
            }
            setIsModalVisible(false);
            setImage(imageObj.assets[0]);
          },
        );
      } else {
        Alert.alert('Informação', 'Permissão de câmera não fornecida');
      }
    } catch (error) {
      console.error('UPDATE::HANDLE_CAMERA', error);
    }
  };

  const handleOpenLibrary = async () => {
    try {
      const req = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      );
      if (req === 'granted') {
        launchImageLibrary(
          {
            mediaType: 'photo',
            maxHeight: 720,
            maxWidth: 720,
          },
          imageObj => {
            if (imageObj.didCancel) {
              return;
            }
            setIsModalVisible(false);
            setImage(imageObj.assets[0]);
          },
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Scroller>
        <Header backIcon title="Cadastre-se" />

        <ButtonImg onPress={() => setIsModalVisible(true)}>
          <ImageUser
            source={{
              uri: image.uri ? image.uri : avatarUser,
            }}
          />
        </ButtonImg>

        <Content>
          <InputArea>
            <Inputs
              value={codigo}
              onChangeText={setCodigo}
              placeholder="Código"
              borderColor={
                selected === 'codigo'
                  ? Colors.borderLighInput
                  : Colors.lightGray
              }
              borderWidth={selected === 'codigo' ? 1.5 : 1}
              onPressIn={() => setSelected('codigo')}
            />
          </InputArea>

          <InputArea>
            <Inputs
              value={user.name}
              onChangeText={t => setUser({ ...user, name: t })}
              placeholder="Nome"
              borderColor={
                selected === 'name' ? Colors.borderLighInput : Colors.lightGray
              }
              borderWidth={selected === 'name' ? 1.5 : 1}
              onPressIn={() => setSelected('name')}
            />
          </InputArea>

          <InputArea>
            <InputMask
              typeMask={'custom'}
              options={{
                mask: '99/99/9999',
              }}
              value={dataNascimento}
              onChangeText={setDataNascimento}
              placeholder="Data de nascimento"
              borderColor={
                selected === 'data' ? Colors.borderLighInput : Colors.lightGray
              }
              borderWidth={selected === 'data' ? 1.5 : 1}
              onPressIn={() => setSelected('data')}
            />
          </InputArea>

          <Button
            title="Cadastrar"
            color={Colors.primary}
            onPress={null}
            loading={loading}
          />
        </Content>

        <SignInAccount color={Colors.primary} isFontBold={false}>
          Você já tem uma conta?{' '}
          <SignInAccount
            color={Colors.primary}
            isFontBold={true}
            onPress={() => navigate('SignIn')}>
            Faça login
          </SignInAccount>
        </SignInAccount>
        <ModalPhoto
          isVisible={isModalVisible}
          onCamera={handleCamera}
          onLibrary={handleOpenLibrary}
          onCancel={() => setIsModalVisible(false)}
        />
      </Scroller>
    </Container>
  );
};
