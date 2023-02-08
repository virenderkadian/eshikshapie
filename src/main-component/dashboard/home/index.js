/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {Image, ImageBackground, ScrollView, Text, View} from 'react-native';
import Avatar from '../../../assets/avatar.png';
import Icon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Searchbar} from 'react-native-paper';
import Filter from '../../../assets/filter.png';
import BgImg from '../../../assets/bg.jpeg';
import styles from './styles';
import {
  CARO_DATA,
  MentorData,
  PopularCoursesData,
} from '../../../utils/dummydata/data';
import {CourseList} from '../../../components/courses';

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View>
        <ScrollView>
          <Header />
          <Search />
          <Carousal data={CARO_DATA} />
          <TopMentors data={MentorData} />
          <PopularCourses data={PopularCoursesData} />
        </ScrollView>
      </View>
    </View>
  );
}

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <View>
          <Image
            source={Avatar}
            resizeMode="contain"
            style={{width: 60, height: 60, borderRadius: 30}}
          />
        </View>
        <View>
          <Text style={{color: 'grey'}}>Good morning 👋🏼</Text>
          <Text style={styles.userTextStyle}>Deepak Kumar</Text>
        </View>
      </View>
      <View style={styles.headerRight}>
        <Icon name="bell" color="black" size={20} />
        <IonIcon name="bookmarks-outline" color="black" size={20} />
      </View>
    </View>
  );
};
const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={{marginHorizontal: 25, alignContent: 'center'}}>
      <Searchbar
        style={{backgroundColor: '#e2e3e3', borderRadius: 15}}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Image
        style={{
          position: 'absolute',
          right: 10,
          marginTop: 10,
          width: 30,
          height: 30,
        }}
        source={Filter}
      />
    </View>
  );
};
const Carousal = ({data}) => {
  const scrollViewRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      autoScroll();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);
  const autoScroll = () => {
    if (currentIndex >= data.length - 1) {
      setCurrentIndex(0);
      scrollViewRef.current.scrollTo({
        x: 0,
        animated: true,
      });
    } else {
      setCurrentIndex(prev => prev + 1);
      scrollViewRef.current.scrollTo({
        x: (currentIndex + 1) * 353,
        animated: true,
      });
    }
  };
  const setSelectedIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffeset = event.nativeEvent.contentOffset.x;
    const ind = Math.floor(contentOffeset / viewSize);
    setCurrentIndex(ind);
  };
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={styles.CaroItemContainerBg}
        source={BgImg}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          scrollEventThrottle={0}
          onMomentumScrollEnd={setSelectedIndex}
          showsHorizontalScrollIndicator={false}
          pagingEnabled>
          {data.map((item, index) => {
            return (
              <View key={index} style={styles.CaroItemContainer}>
                <View style={styles.CarItemTopContainer}>
                  <View>
                    <Text style={{color: 'white'}}>{item.text1}</Text>
                    <Text
                      style={{color: 'white', fontSize: 25, fontWeight: '500'}}>
                      {item.text2}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{color: 'white', fontSize: 40, fontWeight: '500'}}>
                      {item.text3}
                    </Text>
                  </View>
                </View>
                <View style={styles.CarItemBottomContainer}>
                  <Text style={{color: 'white'}}>{item.text4}</Text>
                  <Text style={{color: 'white'}}>{item.text5}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </ImageBackground>
      <View style={styles.scrollIndicatorContainer}>
        <View style={styles.scrollIndicatorContainerView}>
          {data.map((item, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.scrollIndicatorCircle,
                  {
                    backgroundColor:
                      index === currentIndex ? '#00000079' : '#00000029',
                  },
                ]}></View>
            );
          })}
        </View>
      </View>
    </>
  );
};
const TopMentors = ({data}) => {
  return (
    <View style={{marginTop: 20, width: '100%'}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
          Top Mentors
        </Text>
        <Text style={{fontSize: 17, fontWeight: '500', color: 'blue'}}>
          See All
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => {
            return (
              <View
                style={{alignItems: 'center', justifyContent: 'flex-start'}}>
                <View
                  style={{
                    width: 75,
                    height: 75,
                    borderRadius: 37.5,
                    marginHorizontal: 10,
                    overflow: 'hidden',
                  }}>
                  <Image
                    style={{height: 75, width: 75}}
                    source={item.image}
                    resizeMode="cover"
                  />
                </View>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 15,
                    color: 'black',
                    marginTop: 7,
                  }}>
                  {item.name}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};
const PopularCourses = ({data}) => {
  return (
    <View style={{marginTop: 20}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <Text style={{fontSize: 20, fontWeight: '500', color: 'black'}}>
          Most Popular Courses
        </Text>
        <Text style={{fontSize: 17, fontWeight: '500', color: 'blue'}}>
          See All
        </Text>
      </View>
      <CourseList data={data} />
    </View>
  );
};
