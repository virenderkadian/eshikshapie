import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeLogin from '../main-component/auth/welcomeLogin';
import LoginWithPass from '../main-component/auth/loginWithPass';
import ForgotPassword from '../main-component/auth/forgotPassword';
import AuthLoading from '../main-component/auth/authLoading';
import HomeScreen from '../main-component/dashboard/home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Constants from '../utils/constants';
import CreateAccount from '../main-component/auth/createAccount';
import VerifyCode from '../main-component/auth/verifyCode';
import MyCourse from '../main-component/dashboard/myCourse';
import Inbox from '../main-component/dashboard/inbox';
import Profile from '../main-component/dashboard/profile';
import Transaction from '../main-component/dashboard/transaction';
import MostPopularCourse from '../main-component/dashboard/popularCourses';
import TopMentors from '../main-component/dashboard/TopMentors';
import Notifications from '../main-component/dashboard/Notifications';
import Bookmarks from '../main-component/dashboard/Bookmarks';

const Stack = createStackNavigator();
const DashStack = createStackNavigator();
const DashBoardBottomNavigation = createBottomTabNavigator();

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
  const Routes = Constants.routeName;
  return (
    <DashStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BottomBar">
      <DashStack.Screen
        name="BottomBar"
        component={BottomBar}
        options={{headerShown: false}}
      />
      <DashStack.Screen name={Routes.TopMentors} component={TopMentors} />
      <DashStack.Screen name={Routes.Notifications} component={Notifications} />
      <DashStack.Screen name={Routes.Bookmarks} component={Bookmarks} />
      <DashStack.Screen
        name={Routes.mostPopularCourse}
        component={MostPopularCourse}
      />
    </DashStack.Navigator>
  );
}

function BottomBar() {
  return (
    <DashBoardBottomNavigation.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = 'home';
            return (
              <AntDesign
                name={iconName}
                size={size}
                color={color}
                style={{transform: [{scale: focused ? 1.1 : 0.8}]}}
              />
            );
          } else if (route.name === 'MyCourse') {
            iconName = 'md-reader-outline';
          } else if (route.name === 'Inbox') {
            iconName = 'message1';
            return (
              <AntDesign
                name={iconName}
                size={size}
                color={color}
                style={{transform: [{scale: focused ? 1.1 : 0.8}]}}
              />
            );
          } else if (route.name === 'Transaction') {
            iconName = 'shopping-cart';
            return (
              <Feather
                name={iconName}
                size={size}
                color={color}
                style={{transform: [{scale: focused ? 1.1 : 0.8}]}}
              />
            );
          } else if (route.name === 'Profile') {
            iconName = 'md-person';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
              style={{transform: [{scale: focused ? 1.1 : 0.8}]}}
            />
          );
        },
        tabBarActiveTintColor: Constants.colorCodes.themeBlue,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <DashBoardBottomNavigation.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <DashBoardBottomNavigation.Screen name="MyCourse" component={MyCourse} />
      <DashBoardBottomNavigation.Screen name="Inbox" component={Inbox} />

      <DashBoardBottomNavigation.Screen
        name="Transaction"
        component={Transaction}
      />
      <DashBoardBottomNavigation.Screen name="Profile" component={Profile} />
    </DashBoardBottomNavigation.Navigator>
  );
}

export default AppNavigator;
