/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import main from '../../../assets/main.jpg';
import mainDark from '../../../assets/mainDark.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/Ionicons';
import styles from './style';
import CustomButton from '../../../components/customButton';
import {Dimen} from '../../../utils/helper';
import Constants from '../../../utils/constants';
import CustomHeader from '../../../components/customPageHeader';
import useThemeColors from '../../../utils/customHooks/useThemeColors';

export default function ForgotPassword(props) {
  const colors = useThemeColors();
  const theme = useColorScheme();
  const [viaMethod, setViaMethod] = React.useState(0);
  const contacts = {
    email: 'esikhshalearning@mail.com',
    mobile: '+91812396072',
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        props={props}
        headerText={Constants.headerText.ForgotPassword}
      />
      <Image
        source={theme == 'dark' ? mainDark : main}
        style={styles.imgStyle}
        resizeMode="contain"
      />
      <Text style={[styles.descText, {color: colors.text}]}>
        Select which contact details should we use to reset your password
      </Text>
      <View style={{width: '100%', paddingHorizontal: 10}}>
        <TouchableOpacity
          onPress={() => setViaMethod(1)}
          style={[
            styles.contactContainer,
            {
              borderColor: viaMethod === 1 ? '#3E5DEE' : '#F2F2F2',
              backgroundColor: colors.background,
            },
          ]}>
          <View style={styles.contactIconContainer}>
            <IconAnt
              name="ios-chatbubble-ellipses-sharp"
              size={25}
              color="#3E5DEE"
            />
          </View>
          <View style={styles.contactTextContainer}>
            <Text style={{color: colors.text}}>via SMS:</Text>
            <Text style={{color: colors.text, fontWeight: '700'}}>
              {contacts.mobile}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setViaMethod(2)}
          style={[
            styles.contactContainer,
            {
              borderColor: viaMethod === 2 ? '#3E5DEE' : '#F2F2F2',
              backgroundColor: colors.background,
            },
          ]}>
          <View style={styles.contactIconContainer}>
            <Icon name="email" size={25} color="#3E5DEE" />
          </View>
          <View style={styles.contactTextContainer}>
            <Text style={{color: colors.text}}>via Email:</Text>
            <Text style={{color: colors.text, fontWeight: '700'}}>
              {contacts.email}
            </Text>
          </View>
        </TouchableOpacity>
        <CustomButton
          style={{}}
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
    </View>
  );
}
