import React from 'react';
import {Image, View, Text, StatusBar} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';

import { NavigationProp } from '@react-navigation/native';

const Onboarding = ({navigation}: {navigation: NavigationProp<any>}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../../assets/Onboarding.png')}
          style={styles.image}
        />
        <View style={styles.footer} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Best task management app</Text>
        <Text numberOfLines={2} style={styles.subTitle}>
          Get organized by sorting out all your tasks and boost your
          productivity
        </Text>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />

        <Button title="login" onPress={() => navigation.navigate('Signin')} />
        <Button
          type={'blue'}
          title="Get Started"
          onPress={() => navigation.navigate('Signup')}
        />
      </View>
    </View>
  );
};

export default React.memo(Onboarding);
