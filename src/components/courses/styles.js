import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';
import {Dimen} from '../../utils/helper';

export const styles = StyleSheet.create({
  clnContainer: {
    borderWidth: 2,
    borderColor: Colors.themeBlue,
    borderRadius: 30,
    paddingHorizontal: 13,
    paddingVertical: 7,
    marginHorizontal: 5,
  },
  clListView: {
    width: Dimen.Width * 0.9,
    alignSelf: 'center',
    margin: 'auto',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },
});
