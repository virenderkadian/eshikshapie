/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import googleIcon from '../../../assets/icon-google.png';
import styles from './style';
import LineWithText from '../../../components/textbtwLine';
import CustomInput from '../../../components/customInput';
import Constants from '../../../utils/constants';
import CustomButton from '../../../components/customButton';

export default function LoginWithPass(props) {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
  });

  const redirectLogin = () => {
    props.navigation.navigate(Constants.navigatorsName.DashBoard);
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.loginContainer}>
        <Text style={styles.welcomeText}>Login to your Account</Text>
        <CustomInput
          type="email"
          value={form.email}
          onChangeText={value => setForm({...form, email: value})}
        />
        <CustomInput
          type="password"
          value={form.password}
          onChangeText={value => setForm({...form, password: value})}
        />

        <CustomButton
          onPress={() => {
            console.log(form);
            redirectLogin();
          }}
          text={'Sign in'}
        />
        <Text
          onPress={() =>
            props.navigation.navigate(Constants.routeName.forgotPassword)
          }
          style={{
            color: '#3E5DEE',
            fontWeight: '500',
            textAlign: 'center',
            marginBottom: 30,
          }}>
          Forgot the password?
        </Text>
        <LineWithText text={'or continue with'} />
        <View style={styles.socialView}>
          <TouchableOpacity style={styles.socialContainer}>
            <Icon name="facebook" size={30} color="#0165E1" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialContainer}>
            <Image source={googleIcon} style={{width: 30, height: 30}} />
          </TouchableOpacity>
        </View>
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
      </KeyboardAvoidingView>
    </View>
  );
}
