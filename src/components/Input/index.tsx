import React from 'react';
import styles from './styles';
import {TextInput, KeyboardTypeOptions} from 'react-native';
import colors from '../../constants/colors';

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  onChangeText?: (text: string) => void;
  key?: string;
}

const Input = ({...props}: InputProps) => {
  return (
    <TextInput
      placeholderTextColor={colors.midGrey}
      keyboardType={props.keyboardType}
      style={styles.input}
      {...props}
    />
  );
};

export default React.memo(Input);
