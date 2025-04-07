import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  innerSquare: {
    width: 10,
    height: 10,
    backgroundColor: colors.purple,
    borderRadius: 2,
  },
  checkedBox: {
    borderWidth: 2,
  },
});

export default styles;
