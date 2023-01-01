/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Dimen} from '../../../utils/helper';
import Avatar from '../../../assets/avatar.png';
import Icon from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Searchbar} from 'react-native-paper';
import Filter from '../../../assets/filter.png';
import BgImg from '../../../assets/bg.jpeg';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';

const CARO_DATA = [
  {
    text1: '40% OFF ',
    text2: "Today's Special",
    text3: '40%',
    text4: 'Get a discount for every course order!',
    text5: 'Only valid for today!',
  },
  {
    text1: '40% OFF ',
    text2: "Today's Special",
    text3: '40%',
    text4: 'Get a discount for every course order!',
    text5: 'Only valid for today!',
  },
  {
    text1: '40% OFF ',
    text2: "Today's Special",
    text3: '40%',
    text4: 'Get a discount for every course order!',
    text5: 'Only valid for today!',
  },
  {
    text1: '40% OFF ',
    text2: "Today's Special",
    text3: '40%',
    text4: 'Get a discount for every course order!',
    text5: 'Only valid for today!',
  },
  {
    text1: '40% OFF ',
    text2: "Today's Special",
    text3: '40%',
    text4: 'Get a discount for every course order!',
    text5: 'Only valid for today!',
  },
  {
    text1: '40% OFF ',
    text2: "Today's Special",
    text3: '40%',
    text4: 'Get a discount for every course order!',
    text5: 'Only valid for today!',
  },
  {
    text1: '40% OFF ',
    text2: "Today's Special",
    text3: '40%',
    text4: 'Get a discount for every course order!',
    text5: 'Only valid for today!',
  },
];
export default function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View>
        <Header />
        <Search />
        <Carousal data={CARO_DATA} />
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
        style={styless.CaroItemContainerBg}
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
              <View key={index} style={styless.CaroItemContainer}>
                <View style={styless.CarItemTopContainer}>
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
                <View style={styless.CarItemBottomContainer}>
                  <Text style={{color: 'white'}}>{item.text4}</Text>
                  <Text style={{color: 'white'}}>{item.text5}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </ImageBackground>
      <View
        style={{
          width: '100%',
          marginTop: -25,
          alignItems: 'center',
        }}>
        <View
          style={{
            borderWidth: 1,
            justifyContent: 'center',
            borderColor: 'red',
            flexDirection: 'row',
            width: '20%',
            padding: 5,
            borderRadius: 10,
          }}>
          {data.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: 6,
                  height: 6,
                  marginHorizontal: 2,
                  backgroundColor: 'red',
                  borderRadius: 3,
                }}></View>
            );
          })}
        </View>
      </View>
      {/* <Text style={{color: 'red'}}>
        {currentIndex + 1} / {data.length}
      </Text> */}
    </>
  );
};

const styless = StyleSheet.create({
  CaroItemContainer: {
    height: '100%',
    width: Dimen.Width - 40,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  CaroItemContainerBg: {
    height: Dimen.Width * 0.45,
    width: Dimen.Width - 40,
    marginHorizontal: 20,
    backgroundColor: 'red',
    overflow: 'hidden',
    borderRadius: 30,
    marginTop: 20,
  },
  CarItemTopContainer: {
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CarItemBottomContainer: {
    paddingHorizontal: 25,
  },
});
