import React from 'react';
import { ModalContainer, OptionsText, Options } from './styles';
import Modal from 'react-native-modal';

export const ModalPhoto = ({ isVisible, onCamera, onLibrary, onCancel }) => {
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection={['up', 'left', 'right', 'down']}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}>
      <ModalContainer>
        <Options onPress={onCamera}>
          <OptionsText>Tirar foto</OptionsText>
        </Options>

        <Options onPress={onLibrary}>
          <OptionsText>Escolher existente</OptionsText>
        </Options>

        <Options onPress={onCancel}>
          <OptionsText>Cancelar</OptionsText>
        </Options>
      </ModalContainer>
    </Modal>
  );
};
