import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../constants/colors';
// const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  image: {width: '100%', flex: 1},
  container: {
    flex: 1,
  },
  content: {
    padding: 46,
    paddingTop:0,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 15,
    marginVertical: 16,
    color: colors.grey,
    textAlign: 'center',
  },
  footer: {
    backgroundColor: colors.white,
    height: 50,
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    bottom: 0,
  },
});

export default styles;
