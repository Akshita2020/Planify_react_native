import React from 'react';
import styles from './styles';
import {TextInput} from 'react-native';
import colors from '../../constants/colors';

interface InputProps {
  placeholder: string;
  secureTextEntry?: boolean;
}

const Input = ({...props}: InputProps) => {
  return <TextInput placeholderTextColor={colors.midGrey} style={styles.input} {...props} />;
};

export default React.memo(Input);
