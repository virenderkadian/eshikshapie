import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeLogin from '../main-component/auth/welcomeLogin';
import LoginWithPass from '../main-component/auth/loginWithPass';
import ForgotPassword from '../main-component/auth/forgotPassword';
import AuthLoading from '../main-component/auth/authLoading';
import HomeScreen from '../main-component/dashboard/home';
import Constants from '../utils/constants';
import CreateAccount from '../main-component/auth/createAccount';
import VerifyCode from '../main-component/auth/verifyCode';
const Stack = createStackNavigator();

export const navigationRef = React.createRef();

function AppNavigator() {
  const Navigator = Constants.navigatorsName;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Navigator.AuthLoading}>
      <Stack.Screen name={Navigator.AuthLoading} component={AuthLoading} />
      <Stack.Screen name={Navigator.DashBoard} component={DashBoard} />
      <Stack.Screen name={Navigator.OnBoard} component={OnBoard} />
    </Stack.Navigator>
  );
}

function OnBoard() {
  const Routes = Constants.routeName;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.WelcomeLogin}>
      <Stack.Screen name={Routes.WelcomeLogin} component={WelcomeLogin} />
      <Stack.Screen name={Routes.createAccount} component={CreateAccount} />
      <Stack.Screen name={Routes.forgotPassword} component={ForgotPassword} />
      <Stack.Screen name={Routes.loginWithPass} component={LoginWithPass} />
      <Stack.Screen name={Routes.verifyCode} component={VerifyCode} />
    </Stack.Navigator>
  );
}
function DashBoard() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
