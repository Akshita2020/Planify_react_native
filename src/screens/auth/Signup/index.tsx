import React from 'react';
import {View, Text, Linking, Alert, ScrollView} from 'react-native';
import auth from '@react-native-firebase/auth';
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
  interface SignupValues {
    firstName: string;
    lastName: string;
    Email: string;
    Password: string;
    confirmPassword: string;
  }

  const [values, setValues] = React.useState<SignupValues>({
    firstName: '',
    lastName: '',
    Email: '',
    Password: '',
    confirmPassword: '',
  });

  const onCheckboxPress = () => {
    setAgreed(value => !value);
  };
  const onLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  const onSubmit = () => {
    if (values.Password !== values.confirmPassword) {
      Alert.alert('Passwords do not match!');
      return;
    }
    if (!agreed) {
      Alert.alert('You should agree to the terms');
      return;
    }
    auth()
      .createUserWithEmailAndPassword(values.Email, values.Password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const onChange = (value: any, key: any) => {
    setValues(vals => ({
      ...vals,
      [key]: value,
    }));
    console.log(values);
  };
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title title="Join the hub!" />
        <Input
          onChangeText={value => onChange(value, 'firstName')}
          placeholder="First Name"
        />
        <Input
          onChangeText={value => onChange(value, 'lastName')}
          placeholder="Last Name"
        />
        <Input
          onChangeText={value => onChange(value, 'Email')}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Input
          onChangeText={value => onChange(value, 'Password')}
          placeholder="Password"
          secureTextEntry
        />
        <Input
          onChangeText={value => onChange(value, 'confirmPassword')}
          placeholder="Confirm Password"
          secureTextEntry
        />

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
        <Button onPress={onSubmit} type="blue" title="Create new account" />
        <Text style={[styles.footerText]}>
          Already Registered?
          <Text
            style={styles.footerLink}
            onPress={() => navigation.navigate('Signin')}>
            Sign in
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default React.memo(Signup);
