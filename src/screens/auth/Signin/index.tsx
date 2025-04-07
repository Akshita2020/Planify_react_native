import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import {NavigationProp} from '@react-navigation/native';

const Signin = ({navigation}: {navigation: NavigationProp<any>}) => {
  return (
    <View style={styles.container}>
      <Title title="Welcome back" />
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Password" secureTextEntry />
      <Button title="login" />
      <Text style={[styles.footerText]}>
        Not Registered?
        <Text
          style={styles.footerLink}
          onPress={() => navigation.navigate('Signup')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default React.memo(Signin);
