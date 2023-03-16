import React from 'react';
import {ScrollView, View} from 'react-native';
import {CourseList} from '../../../components/courses';
import CustomHeader from '../../../components/customPageHeader';
import {PopularCoursesData} from '../../../utils/dummydata/data';

export default function TopMentors() {
  return (
    <ScrollView style={{flex: 1}}>
      <CustomHeader headerText={'Most Popular Courses'} search />
      <CourseList data={PopularCoursesData} />
    </ScrollView>
  );
}
