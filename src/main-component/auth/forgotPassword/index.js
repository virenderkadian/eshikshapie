/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import main from '../../../assets/main.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/Ionicons';
import styles from './style';
import CustomButton from '../../../components/customButton';
import {Dimen} from '../../../utils/helper';
import Constants from '../../../utils/constants';

export default function ForgotPassword(props) {
  const [viaMethod, setViaMethod] = React.useState(0);
  const contacts = {
    email: 'esikhshalearning@mail.com',
    mobile: '+91812396072',
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon
          name="keyboard-backspace"
          color={'black'}
          size={25}
          style={{alignSelf: 'flex-start'}}
          onPress={() => {
            props.navigation.goBack();
          }}
        />
        <Text style={styles.headerText}>Forgot Password</Text>
      </View>
      <Image source={main} style={styles.imgStyle} resizeMode="contain" />
      <Text style={styles.descText}>
        Select which contact details should we use to reset your password
      </Text>
      <TouchableOpacity
        onPress={() => setViaMethod(1)}
        style={[
          styles.contactContainer,
          {borderColor: viaMethod === 1 ? '#3E5DEE' : '#F2F2F2'},
        ]}>
        <View style={styles.contactIconContainer}>
          <IconAnt
            name="ios-chatbubble-ellipses-sharp"
            size={25}
            color="#3E5DEE"
          />
        </View>
        <View style={styles.contactTextContainer}>
          <Text style={{color: 'black'}}>via SMS:</Text>
          <Text style={{color: 'black', fontWeight: '700'}}>
            {contacts.mobile}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setViaMethod(2)}
        style={[
          styles.contactContainer,
          {borderColor: viaMethod === 2 ? '#3E5DEE' : '#F2F2F2'},
        ]}>
        <View style={styles.contactIconContainer}>
          <Icon name="email" size={25} color="#3E5DEE" />
        </View>
        <View style={styles.contactTextContainer}>
          <Text style={{color: 'black'}}>via Email:</Text>
          <Text style={{color: 'black', fontWeight: '700'}}>
            {contacts.email}
          </Text>
        </View>
      </TouchableOpacity>
      <CustomButton
        style={{width: Dimen.Width - 30}}
        text={'Continue'}
        onPress={() => {
          if (viaMethod !== 0) {
            props.navigation.navigate(Constants.routeName.verifyCode, {
              via: viaMethod === 1 ? 'mobile' : 'email',
              value: viaMethod === 1 ? contacts.mobile : contacts.email,
            });
          }
        }}
      />
    </View>
  );
}
