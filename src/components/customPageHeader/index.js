/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, useColorScheme, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import newLogo from '../../assets/newLogo.png';
import darkNewLogo from '../../assets/darkNewLogo.png';
import useThemeColors from '../../utils/customHooks/useThemeColors';
const CustomHeader = props => {
  const colors = useThemeColors();
  const theme = useColorScheme();
  const navigation = useNavigation();
  return (
    <View
      style={[styles.headerContainer, {backgroundColor: colors.background}]}>
      <View style={styles.headerContainerLeft}>
        {!props.disbaleBack ? (
          <Icon
            name="keyboard-backspace"
            color={colors.text}
            size={25}
            style={{alignSelf: 'flex-start'}}
            onPress={() => navigation.goBack()}
          />
        ) : (
          <Image
            source={theme == 'dark' ? darkNewLogo : newLogo}
            style={{
              width: 30,
              height: 30,
              resizeMode: 'contain',
              alignSelf: 'flex-start',
            }}
          />
        )}
        <Text style={[styles.headerTextStyle, {color: colors.text}]}>
          {props.headerText}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        {props.search && (
          <Ionicons name="search-outline" size={25} color={colors.text} />
        )}
        {props.threedots && (
          <Icon
            name="dots-horizontal-circle-outline"
            size={25}
            color={colors.text}
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
    paddingBottom: 10,
    justifyContent: 'space-between',
    width: '100%',
  },
  headerContainerLeft: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  headerTextStyle: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '500',
  },
});

export default CustomHeader;
