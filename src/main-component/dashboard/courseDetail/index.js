import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Constants from '../../../utils/constants';
import useThemeColors from '../../../utils/customHooks/useThemeColors';
import {Dimen} from '../../../utils/helper';
import {Colors} from '../../../utils/colors';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import CustomButton from '../../../components/customButton';
import Video from 'react-native-video';

export default function CourseDetails(props) {
  console.log(props.route.params.data);
  const data = props.route.params.data;
  const colors = useThemeColors();
  return (
    <ScrollView contentContainerStyle={{flex: 1, flexGrow: 1}}>
      <View>
        <View style={{height: Dimen.Height * 0.3}}>
          <Icon
            name="keyboard-backspace"
            color={colors.text}
            size={25}
            style={{alignSelf: 'flex-start', position: 'absolute'}}
            onPress={() => props.navigation.goBack()}
          />
          {/* <Video
            // onEnd={this.onEnd}
            // onLoad={this.onLoad}
            // onLoadStart={this.onLoadStart}
            // onProgress={this.onProgress}
            // paused={this.state.paused}
            // ref={videoPlayer => (this.videoPlayer = videoPlayer)}
            // resizeMode={this.state.screenType}
            // onFullScreen={this.state.isFullScreen}
            source={{
              uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
            }}
            resizeMode="contain"
            style={{height: Dimen.Height * 0.3, width: '100%'}}
            volume={10}
          /> */}
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
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
            }}>
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
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
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
      </View>

      <CourseDetailsTabs data={data} />
    </ScrollView>
  );
}

const Tab = createMaterialTopTabNavigator();

function CourseDetailsTabs({data}) {
  const colors = useThemeColors();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: colors.screenBackground,
        }}
        style={{flex: 1}}
        screenOptions={{
          tabBarActiveTintColor: colors.link,
          tabBarInactiveTintColor: 'grey',
          tabBarStyle: {backgroundColor: colors.screenBackground},
          tabBarAllowFontScaling: true,
        }}>
        <Tab.Screen
          name="About"
          component={About}
          initialParams={{data: data, colors: colors}}
        />
        <Tab.Screen
          name="Lessons"
          component={Lessons}
          initialParams={{data: data, colors: colors}}
        />
        <Tab.Screen
          name="Reviews"
          component={Reviews}
          initialParams={{data: data, colors: colors}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function About(props) {
  console.log('About', props.route.params);
  const {data, colors} = props.route.params;

  return (
    <ScrollView style={{}}>
      <View style={{paddingHorizontal: 15}}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: colors.text,
            marginTop: 7,
          }}>
          {'Mentor'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 65,
                height: 65,
                borderRadius: 37.5,
                overflow: 'hidden',
              }}>
              <Image
                style={{height: 65, width: 65}}
                source={data.image}
                resizeMode="cover"
              />
            </View>
            <View
              style={{justifyContent: 'space-around', paddingHorizontal: 10}}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 18,
                  color: colors.text,
                }}>
                Jacob Williams
              </Text>
              <Text
                style={{
                  marginTop: 7,
                  fontWeight: '400',
                  fontSize: 12,
                  color: 'grey',
                }}>
                Senior UI/UX designer at Google
              </Text>
            </View>
          </View>
          <AntDesignIcon name="message1" color={colors.link} size={20} />
        </View>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 18,
            color: colors.text,
            marginTop: 20,
          }}>
          {'About Course'}
        </Text>
        <Text style={{color: 'grey'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          viverra mauris sit amet metus bibendum ultricies. Mauris quis eros
          sagittis, suscipit nisi id, cursus orci. Interdum et malesuada fames
          ac ante ipsum primis in faucibus. Praesent eu nunc id erat lacinia
          fermentum vitae vestibulum dui. Quisque metus nibh, mollis at erat
          quis, dictum cursus enim. Cras finibus mi nec tincidunt pulvinar.
          Suspendisse molestie fringilla tortor non lobortis. Vivamus placerat
          ut velit id blandit. Etiam id dui vestibulum, porta est eu, bibendum
          est.
        </Text>
        <CustomButton
          onPress={() => {
            console.log('cc');
          }}
          text={'Enroll Now 40'}
        />
      </View>
    </ScrollView>
  );
}
function Lessons() {
  return (
    <View style={{flex: 1}}>
      <Text style={{color: 'black'}}>Hello Lessons</Text>
    </View>
  );
}
function Reviews() {
  return (
    <View>
      <Text>Hello Lessons</Text>
    </View>
  );
}
