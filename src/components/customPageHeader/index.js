/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomHeader = props => {
  return (
    <View style={styles.headerContainer}>
      <Icon
        name="keyboard-backspace"
        color={'black'}
        size={25}
        style={{alignSelf: 'flex-start'}}
        onPress={() => props.props.navigation.goBack()}
      />
      <Text style={styles.headerTextStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  headerTextStyle: {
    color: 'black',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '500',
  },
});

export default CustomHeader;
