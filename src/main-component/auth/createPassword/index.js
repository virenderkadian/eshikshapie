/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import main from '../../../assets/main.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconAnt from 'react-native-vector-icons/Ionicons';
import styles from './style';
import CustomButton from '../../../components/customButton';
import {Dimen} from '../../../utils/helper';

export default function CreatePassword(props) {
  const [timer, setTimer] = React.useState(9);
  React.useEffect(() => {
    const interval = setTimeout(() => setTimer(timer - 1), 1000);
    if (timer <= 0) {
      clearTimeout(interval);
    }
  });
  return (
    <View style={styles.container}>
      <View style={{marginTop: 100, marginBottom: 40}}>
        <Text style={{color: 'black'}}>
          Code has been sent to {props.route.params.value}
        </Text>
      </View>
      {timer <= 0 ? (
        <Text style={{color: '#3E5DEE'}}>Resend Code</Text>
      ) : (
        <Text style={{color: 'black'}}>
          Resend Code in <Text style={{color: '#3E5DEE'}}>{` ${timer} `}</Text>s
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
