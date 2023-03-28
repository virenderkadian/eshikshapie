/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import CustomButton from '../../../components/customButton';
import {Dimen} from '../../../utils/helper';
import CustomHeader from '../../../components/customPageHeader';
import Constants from '../../../utils/constants';
import useThemeColors from '../../../utils/customHooks/useThemeColors';

export default function VerifyCode(props) {
  const colors = useThemeColors();
  const [timer, setTimer] = React.useState(9);
  React.useEffect(() => {
    const interval = setTimeout(() => setTimer(timer - 1), 1000);
    if (timer <= 0) {
      clearTimeout(interval);
    }
  });
  return (
    <View style={styles.container}>
      <CustomHeader
        props={props}
        headerText={Constants.headerText.ForgotPassword}
      />
      <View style={{marginTop: 100, marginBottom: 40}}>
        <Text style={{color: colors.text}}>
          Code has been sent to {props.route.params.value}
        </Text>
      </View>
      {timer <= 0 ? (
        <Text style={{color: colors.link}}>Resend Code</Text>
      ) : (
        <Text style={{color: colors.text}}>
          Resend Code in{' '}
          <Text style={{color: colors.link}}>{` ${timer} `}</Text>s
        </Text>
      )}

      <CustomButton
        style={{width: Dimen.Width - 30}}
        text={'Verify'}
        onPress={() => console.log('Preses')}
      />
    </View>
  );
}
