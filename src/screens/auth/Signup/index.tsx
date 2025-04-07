import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {NavigationProp} from '@react-navigation/native';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';

const Signup = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [agreed, setAgreed] = React.useState(false);

  const onCheckboxPress = () => {
    setAgreed(value => !value);
  };
  return (
    <View style={styles.container}>
      <Title title="Join the hub!" />
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
      <Input placeholder="Confirm Password" />
      <View>
        <Checkbox Checked={agreed} onPress={onCheckboxPress} />
      </View>
      <Button type="blue" title="Create new account" />
      <Text style={[styles.footerText]}>
        Already Registered?
        <Text
          style={styles.footerLink}
          onPress={() => navigation.navigate('Signin')}>
          Sign in
        </Text>
      </Text>
    </View>
  );
};

export default React.memo(Signup);
