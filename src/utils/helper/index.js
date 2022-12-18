import {CommonActions} from '@react-navigation/native';
import {Dimensions} from 'react-native';

export const resetStack = (navigation, name) => {
  navigation.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{name: name}],
    }),
  );
};
export const Dimen = {
  Width: Dimensions.get('window').width,
  Height: Dimensions.get('window').height,
};
