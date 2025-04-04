import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.purple,
flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 13,
    marginVertical: 8,
  },
  ButtonText: {
    color: 'white',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
  },
});

export default styles;
