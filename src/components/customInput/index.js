import React from 'react';
import {TextInput} from 'react-native-paper';

export default function CustomInput(props) {
  const {type, value, onChangeText} = props;
  const [showPassword, setShowPassword] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const types = {
    email: 'email',
    password: 'lock',
  };
  return (
    <TextInput
      secureTextEntry={type == 'password' && !showPassword ? true : false}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mode="outlined"
      activeOutlineColor={'#3E5DEE'}
      outlineColor={'#FAFAFA'}
      placeholder={type.charAt(0).toUpperCase() + type.slice(1)}
      value={value}
      outlineStyle={{borderRadius: 10, borderWidth: 1}}
      style={{backgroundColor: '#FAFAFA'}}
      left={
        <TextInput.Icon
          icon={types[type]}
          iconColor={focused ? '#3E5DEE' : 'grey'}
        />
      }
      right={
        type == 'password' && (
          <TextInput.Icon
            icon={showPassword ? 'eye' : 'eye-off'}
            onPress={() => setShowPassword(!showPassword)}
            iconColor={focused ? '#3E5DEE' : 'grey'}
          />
        )
      }
      onChangeText={onChangeText}
    />
  );
}
