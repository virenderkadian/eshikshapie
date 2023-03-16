import React from 'react';
import {Text, View} from 'react-native';
import CustomHeader from '../../../components/customPageHeader';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Constants from '../../../utils/constants';
export default function MyCourse({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <CustomHeader headerText={'My Courses'} disbaleBack search threedots />
      <View style={{paddingHorizontal: 10, flex: 1}}>
        <MyCoursesTabs />
      </View>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyCoursesTabs() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Constants.colorCodes.themeBlue,
          tabBarInactiveTintColor: 'grey',
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
