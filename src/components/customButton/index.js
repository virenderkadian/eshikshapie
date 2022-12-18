/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-paper';

export default function CustomButton(props) {
  const {onPress, text, style} = props;
  return (
    <Button style={[styles.signContainer, style]} onPress={onPress}>
      <Text style={[styles.socilaText, {color: 'white'}]}>{text}</Text>
    </Button>
  );
}
const styles = StyleSheet.create({
  signContainer: {
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#3E5DEE',
    marginVertical: 30,
  },
});
