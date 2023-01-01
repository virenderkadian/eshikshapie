import {StyleSheet} from 'react-native';
import {Dimen} from '../../../utils/helper';

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    width: Dimen.Width,
    paddingHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerLeft: {flexDirection: 'row', flex: 0.8, alignItems: 'center'},
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 0.2,
  },
  userTextStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
});
export default styles;
