import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: string;
}

const Button = ({title, onPress, type}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, type === 'blue' ? styles.blueBg : {}]}>
      <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
