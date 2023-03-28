import React from 'react';
import {Text, View} from 'react-native';
import CustomHeader from '../../../components/customPageHeader';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Constants from '../../../utils/constants';
import useThemeColors from '../../../utils/customHooks/useThemeColors';
export default function MyCourse({navigation}) {
  return (
    <View style={{flex: 1}}>
      <CustomHeader headerText={'My Courses'} disbaleBack search threedots />
      <View style={{flex: 1}}>
        <MyCoursesTabs />
      </View>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyCoursesTabs() {
  const colors = useThemeColors();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        sceneContainerStyle={{backgroundColor: colors.screenBackground}}
        screenOptions={{
          tabBarActiveTintColor: colors.link,
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {backgroundColor: colors.screenBackground},
          tabBarAllowFontScaling: true,
        }}>
        <Tab.Screen name="Ongoing" component={OngoingCourses} />
        <Tab.Screen name="Completed" component={CompletedCourses} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function OngoingCourses() {
  return (
    <View>
      <Text>Hello OngoingCourses</Text>
    </View>
  );
}
function CompletedCourses() {
  return (
    <View>
      <Text>Hello CompletedCourses</Text>
    </View>
  );
}
