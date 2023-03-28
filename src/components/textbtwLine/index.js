import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import useThemeColors from '../../utils/customHooks/useThemeColors';

export default function LineWithText({text}) {
  const colors = useThemeColors();
  return (
    <View style={{flexDirection: 'row', paddingVertical: 10}}>
      <View
        style={{
          backgroundColor: 'grey',
          height: StyleSheet.hairlineWidth,
          flex: 1,
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          alignSelf: 'center',
          paddingHorizontal: 10,
          fontSize: 20,
          color: colors.text,
        }}>
        {text}
      </Text>
      <View
        style={{
          backgroundColor: 'grey',
          height: StyleSheet.hairlineWidth,
          flex: 1,
          alignSelf: 'center',
        }}
      />
    </View>
  );
}
