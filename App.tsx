import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '../Planify/src/Routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};
export default React.memo(App);