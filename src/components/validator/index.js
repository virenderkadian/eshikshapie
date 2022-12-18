/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

export default function Validator(props) {
  const [isVisible, setIsVisible] = React.useState(false);
  const {type, value} = props;
  React.useEffect(() => {
    if (value !== '') {
      setIsVisible(false);
      console.log('showen');
    } else {
      setIsVisible(true);
    }
  }, [value]);
  return (
    <View>
      {isVisible && (
        <Text style={{color: 'red'}}>
          {type.toUpperCase()} is a required field.{' '}
        </Text>
      )}
    </View>
  );
}
