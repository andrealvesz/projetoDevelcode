import React from 'react';
import { InputArea } from './styles';
import { TextInputMask } from 'react-native-masked-text';
import { Keyboard } from 'react-native';
import { Colors } from '../../config/Colors';

export const InputMask = ({
  value,
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry,
  typeMask,
  options,
  borderColor,
  borderWidth,
  onPressIn,
  backgroundColor,
}) => {
  return (
    <InputArea
      backgroundColor={backgroundColor ? backgroundColor : Colors.gradientForeground}
      borderColor={borderColor}
      borderWidth={borderWidth}>
      <TextInputMask
        type={typeMask}
        options={options}
        placeholder={placeholder}
        placeholderTextColor={Colors.lightGray}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onSubmitEditing={() => Keyboard.dismiss()}
        onPressIn={onPressIn}
        color={Colors.dark}
        style={{
          width: '100%',
          fontFamily: 'Montserrat-Medium',
          color: Colors.dark,
        }}
      />
    </InputArea>
  );
};
