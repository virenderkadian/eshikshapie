import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme';
import Constants from '../constants';

const Colors = {
  light: {
    background: 'white',
    screenBackground: 'white',
    text: 'black',
    link: 'blue',
    borderhighlightColor: Constants.colorCodes.themeBlue,
    selectedTabColor: Constants.colorCodes.themeBlue,
    cardBackground: 'white',
  },
  dark: {
    background: '#212352',
    screenBackground: '#313252',
    text: 'white',
    link: '#9397ed',
    borderhighlightColor: 'white',
    selectedTabColor: 'white',
    cardBackground: '#313252',
  },
};

const useThemeColors = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];

  return colors;
};

export default useThemeColors;
