/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import main from '../../../assets/main.jpg';
import mainDark from '../../../assets/mainDark.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import googleIcon from '../../../assets/icon-google.png';
import styles from './style';
import LineWithText from '../../../components/textbtwLine';
import Constants from '../../../utils/constants';
import useThemeColors from '../../../utils/customHooks/useThemeColors';

export default function WelcomeLogin(props) {
  const colors = useThemeColors();
  const theme = useColorScheme();
  return (
    <View style={styles.container}>
      <Image
        source={theme == 'dark' ? mainDark : main}
        style={{width: '70%', height: '40%'}}
        resizeMode="cover"
      />
      <View style={styles.loginContainer}>
        <Text style={[styles.welcomeText, {color: colors.text}]}>
          Let's you in
        </Text>
        <TouchableOpacity
          style={[
            styles.socialContainer,
            {backgroundColor: colors.background},
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="facebook" size={25} color="#0165E1" />
            <Text style={[styles.socilaText, {color: colors.text}]}>
              Continue with Facebook
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.socialContainer,
            {backgroundColor: colors.background},
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={googleIcon} style={{width: 25, height: 25}} />
            <Text style={[styles.socilaText, {color: colors.text}]}>
              Continue with Google
            </Text>
          </View>
        </TouchableOpacity>
        <LineWithText text={'OR'} />
        <TouchableOpacity
          style={styles.signContainer}
          onPress={() => {
            props.navigation.navigate(Constants.routeName.loginWithPass);
          }}>
          <Text style={[styles.socilaText, {color: 'white'}]}>
            Sign in with Password
          </Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Text style={{color: colors.text}}>
            Dont have an Account?{' '}
            <Text
              style={{color: colors.link}}
              onPress={() =>
                props.navigation.navigate(Constants.routeName.createAccount)
              }>
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
