/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../../utils/colors';
import {Dimen} from '../../utils/helper';
import {styles} from './styles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import useThemeColors from '../../utils/customHooks/useThemeColors';
import {useNavigation} from '@react-navigation/native';
import Constants from '../../utils/constants';

export const CourseList = ({data}) => {
  const headerData = {
    item: {
      courseCat: 'All',
      coursePopularity: 18298,
      discountedPrice: 40,
      id: 10,
      image: '',
      price: 180,
      rating: 4.8,
      title: 'React Native App Development',
    },
  };
  const [selectedCat, setSelectedCat] = React.useState(headerData.item);
  const setCat = data => setSelectedCat(data);
  return (
    <View>
      <CategoryListName
        data={data}
        setCat={setCat}
        selectedCat={selectedCat}
        headerData={headerData}
      />
      <CourseListView data={data} />
    </View>
  );
};

const CategoryListName = ({data, setCat, selectedCat, headerData}) => {
  const colors = useThemeColors();
  const RenderItem = item => {
    return (
      <TouchableOpacity
        key={item.index}
        onPress={() => {
          if (item.item.courseCat !== selectedCat.courseCat) {
            setCat(item.item);
            console.log(item);
          }
        }}
        style={[
          styles.clnContainer,
          {
            backgroundColor:
              selectedCat?.courseCat == item.item.courseCat
                ? Colors.themeBlue
                : 'transparent',
          },
        ]}>
        <Text
          style={{
            color:
              selectedCat?.courseCat !== item.item.courseCat
                ? colors.borderhighlightColor
                : 'white',
            fontWeight: '500',
          }}>
          {item.item.courseCat}
        </Text>
      </TouchableOpacity>
    );
  };

  const FlatListData = data.filter(
    (item, index) => data.indexOf(item) === index,
  );

  return (
    <View style={{flexDirection: 'row', marginVertical: 15}}>
      <RenderItem item={headerData.item} />
      <FlatList
        style={{borderRadius: 30, overflow: 'hidden'}}
        showsHorizontalScrollIndicator={false}
        data={FlatListData}
        horizontal
        renderItem={data => RenderItem(data)}
      />
    </View>
  );
};

const CourseListView = ({data}) => {
  const navigation = useNavigation();
  const colors = useThemeColors();
  const RenderItem = item => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(Constants.routeName.CourseDetails, {
            data: item.item,
          })
        }
        key={item.index}
        style={[styles.clListView, {backgroundColor: colors.background}]}>
        <View
          style={{
            borderRadius: 10,
            flex: 0.35,
          }}>
          <Image
            source={item.item.image}
            resizeMode="cover"
            style={{width: 100, height: 100, borderRadius: 10}}
          />
        </View>
        <View style={{flex: 0.65}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderRadius: 5,
                backgroundColor: Colors.lightblueBG,
                padding: 5,
                overflow: 'hidden',
              }}>
              <Text
                style={{
                  color: Colors.themeBlue,
                  fontSize: 10,
                }}>
                {item.item.courseCat}
              </Text>
            </View>
            <View>
              <IonIcon name="bookmarks-outline" color={colors.link} size={20} />
            </View>
          </View>
          <View style={{paddingTop: 7}}>
            <Text
              numberOfLines={1}
              style={{color: colors.text, fontSize: 15, fontWeight: '500'}}>
              {item.item.title}
            </Text>
          </View>
          <View style={{paddingTop: 7, flexDirection: 'row'}}>
            <Text
              numberOfLines={1}
              style={{
                color: Colors.themeBlue,
                fontSize: 15,
                fontWeight: '500',
              }}>
              ₹{item.item.discountedPrice || 0}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: 'grey',
                fontSize: 15,
                paddingLeft: 10,
                textDecorationLine: 'line-through',
                fontWeight: '500',
              }}>
              ₹{item.item.price}
            </Text>
          </View>
          <View
            style={{
              paddingTop: 7,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 15, height: 15}}
              source={require('../../assets/star-half.png')}
            />
            <Text
              numberOfLines={1}
              style={{
                color: 'grey',
                fontSize: 10,
              }}>
              {'    '}
              {item.item.rating}
              {'  |  '}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: 'grey',
                fontSize: 10,
              }}>
              {item.item.coursePopularity}
              {'  students'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      style={{width: Dimen.Width, flex: 1}}
      data={data}
      renderItem={data => RenderItem(data)}
    />
  );
};
