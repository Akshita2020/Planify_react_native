import {Text} from 'react-native';
import React from 'react';
import styles from './styles';

interface TitleProps {
  title: string;
}

const Title = ({title}: TitleProps) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default React.memo(Title);
