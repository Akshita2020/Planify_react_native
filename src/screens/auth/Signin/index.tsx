import React from 'react';
import { View} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';

const Signin = () => {
  return (
    <View style={styles.container}>
      <Button title="login" />
    </View>
  );
};

export default React.memo(Signin);
