import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';

const Signup = () => {
  return (
    <View style={styles.container}>
      <Button title="Create new account" />
    </View>
  );
};

export default React.memo(Signup);
