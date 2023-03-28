import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Constants from '../../../utils/constants';
import useThemeColors from '../../../utils/customHooks/useThemeColors';
import {Dimen} from '../../../utils/helper';
import {Colors} from '../../../utils/colors';

export default function CourseDetails(props) {
  console.log(props.route.params.data);
  const data = props.route.params.data;
  const colors = useThemeColors();
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{height: Dimen.Height * 0.4}}>
        <Icon
          name="keyboard-backspace"
          color={colors.text}
          size={25}
          style={{alignSelf: 'flex-start'}}
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={{paddingHorizontal: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: colors.text, fontSize: 20, fontWeight: '700'}}>
            {data.title}
          </Text>
          <IonIcon
            name="ios-bookmarks-outline"
            color={colors.link}
            size={20}
            onPress={() =>
              props.navigation.navigate(Constants.routeName.Notifications)
            }
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <View
            style={{
              borderRadius: 5,
              backgroundColor: Colors.lightblueBG,
              padding: 5,
              width: 'auto',
              overflow: 'hidden',
            }}>
            <Text
              style={{
                color: Colors.themeBlue,
                fontSize: 10,
              }}>
              {data.courseCat}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../../../assets/star-half.png')}
            />
            <Text
              numberOfLines={1}
              style={{
                color: 'grey',
                fontSize: 10,
              }}>
              {'    '}
              {data.rating}{' '}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: 'grey',
                fontSize: 10,
              }}>
              {'(4479 Reviews)'}
            </Text>
          </View>
        </View>
        <View
          style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
          <Text
            numberOfLines={1}
            style={{
              color: Colors.themeBlue,
              fontSize: 22,
              fontWeight: '700',
            }}>
            ₹{data.price - data.discount || 0}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: 'grey',
              fontSize: 13,
              paddingLeft: 10,
              textDecorationLine: 'line-through',
              fontWeight: '500',
            }}>
            ₹{data.price}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontistoIcon name="persons" color={colors.link} size={13} />
            <Text
              numberOfLines={1}
              style={{
                color: 'grey',
                fontSize: 12,
              }}>
              {'  '}
              {data.coursePopularity}
              {'  students'}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="clock" color={colors.link} size={15} />
            <Text
              numberOfLines={1}
              style={{
                color: 'grey',
                fontSize: 12,
              }}>
              {'  '}
              {'2.5 Hours '}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IonIcon name="newspaper" color={colors.link} size={15} />
            <Text
              numberOfLines={1}
              style={{
                color: 'grey',
                fontSize: 12,
              }}>
              {'  '}
              {'Certificates'}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
