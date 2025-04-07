import React from 'react';
import {View, Text, Alert} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import {NavigationProp} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

interface SigninValues {
  email: string;
  password: string;
}

interface SigninProps {
  navigation: NavigationProp<any>;
}

const Signin: React.FC<SigninProps> = ({navigation}) => {
  const [values, setValues] = React.useState<SigninValues>({
    email: '',
    password: '',
  });

  const onChange = (value: string, key: keyof SigninValues) => {
    setValues(vals => ({
      ...vals,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log('User signed in!');
      })
      .catch(error => {
        console.error('error:>>',error);
        if (error.code === 'auth/user-not-found') {
          console.log('No user found with this email!');
        } else if (error.code === 'auth/wrong-password') {
          console.log('Incorrect password!');
        } else if (error.code === 'auth/invalid-email') {
          console.log('Invalid email format!');
        }else {
          Alert.alert(error.message);
        }
      });
  };

  return (
    <View style={styles.container}>
      <Title title="Welcome back" />
      <Input
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={value => onChange(value, 'email')}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={value => onChange(value, 'password')}
      />
      <Button title="Login" onPress={onSubmit} />
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
