/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import main from '../../../assets/main.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import googleIcon from '../../../assets/icon-google.png';
import styles from './style';
import LineWithText from '../../../components/textbtwLine';
import Constants from '../../../utils/constants';

export default function WelcomeLogin(props) {
  return (
    <View style={styles.container}>
      <Image
        source={main}
        style={{width: '70%', height: '40%'}}
        resizeMode="cover"
      />
      <View style={styles.loginContainer}>
        <Text style={styles.welcomeText}>Let's you in</Text>
        <TouchableOpacity style={styles.socialContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="facebook" size={25} color="#0165E1" />
            <Text style={styles.socilaText}>Continue with Facebook</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={googleIcon} style={{width: 25, height: 25}} />
            <Text style={styles.socilaText}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <LineWithText text={'or'} />
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
          <Text style={{color: 'black'}}>
            Dont have an Account?{' '}
            <Text
              style={{color: '#3E5DEE'}}
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
