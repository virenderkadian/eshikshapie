import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {resetStack} from '../../../utils/helper';

const AuthLoading = props => {
  React.useEffect(() => {
    const func = async () => {
      const IsLoggedIn = await AsyncStorage.getItem('IsloggedIn').then(res =>
        JSON.parse(res),
      );
      if (IsLoggedIn) {
        resetStack(props.navigation, 'DashBoard');
        console.log('came is');
      } else {
        resetStack(props.navigation, 'OnBoard');
      }
    };
    func();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};
export default AuthLoading;
