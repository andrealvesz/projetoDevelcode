import React from 'react';
import { Keyboard } from 'react-native';

import { Container, IconArea, TextInput } from './styles';
import { Colors } from '../../config/Colors';

export const Inputs = ({
  typeInput,
  value,
  onChangeText,
  placeholder,
  autoCapitalize,
  secureTextEntry,
  keyboardType,
  borderColor,
  borderWidth,
  editable,
  IconSvg,
  onPressIn,
  iconColor,
  placeholderTextColor,
  backgroundColor,
  onPress,
}) => {
  return (
    <Container
      backgroundColor={
        backgroundColor ? backgroundColor : Colors.gradientForeground
      }
      borderColor={borderColor}
      borderWidth={borderWidth}>
      {IconSvg && (
        <IconArea>
          <IconSvg color={iconColor} width={20} height={20} />
        </IconArea>
      )}

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : Colors.lightGray
        }
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        editable={editable}
        blurOnSubmit={false}
        onSubmitEditing={() => Keyboard.dismiss()}
        onPressIn={onPressIn}
      />
    </Container>
  );
};
