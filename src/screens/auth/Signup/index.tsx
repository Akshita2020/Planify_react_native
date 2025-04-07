import React from 'react';
import {View, Text, Linking} from 'react-native';
import styles from './styles';
import {NavigationProp} from '@react-navigation/native';
import Title from '../../../components/Title';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from '../../../constants/links';

const Signup = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [agreed, setAgreed] = React.useState(false);

  const onCheckboxPress = () => {
    setAgreed(value => !value);
  };
  const onLinkPress = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <Title title="Join the hub!" />
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Password" secureTextEntry />
      <Input placeholder="Confirm Password" secureTextEntry />
      <View style={styles.row}>
        <Checkbox Checked={agreed} onPress={onCheckboxPress} />
        <Text style={styles.agreeText}>
          I agree to {''}
          <Text
            style={styles.link}
            onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}>
            terms and conditions
          </Text>
          {''} and {''}
          <Text
            style={styles.link}
            onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
            privacy policy
          </Text>
        </Text>
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
