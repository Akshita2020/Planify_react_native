import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.ButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
