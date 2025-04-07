import {Pressable, View} from 'react-native';
import React from 'react';
import styles from './styles';

interface CheckboxProps {
  Checked: boolean;
  onPress?: () => void;
}

const Checkbox = ({Checked, onPress}: CheckboxProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, Checked ? styles.checkedBox : {}]}>
      {Checked ? <View style={styles.innerSquare} /> : null}
    </Pressable>
  );
};

export default React.memo(Checkbox);
