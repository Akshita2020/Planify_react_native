import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';
import {StatusBar} from 'react-native';

const Onboarding = () => {
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

        <Button title="login" />
        <Button type={'blue'} title="Get Started" />
      </View>
    </View>
  );
};

export default React.memo(Onboarding);
