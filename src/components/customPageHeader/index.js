/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import main from '../../assets/logo.png';
const CustomHeader = props => {
  const navigation = useNavigation();
  return (
    <View style={[styles.headerContainer]}>
      <View style={styles.headerContainerLeft}>
        {!props.disbaleBack ? (
          <Icon
            name="keyboard-backspace"
            color={'black'}
            size={25}
            style={{alignSelf: 'flex-start'}}
            onPress={() => navigation.goBack()}
          />
        ) : (
          <Image
            source={main}
            style={{
              width: 30,
              height: 30,
              resizeMode: 'contain',
              alignSelf: 'flex-start',
            }}
          />
        )}
        <Text style={styles.headerTextStyle}>{props.headerText}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        {props.search && (
          <Ionicons name="search-outline" size={25} color={'black'} />
        )}
        {props.threedots && (
          <Icon
            name="dots-horizontal-circle-outline"
            size={25}
            color={'black'}
            style={{marginLeft: 10}}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  headerContainerLeft: {
    flexDirection: 'row',
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
