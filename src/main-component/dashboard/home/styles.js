import {StyleSheet} from 'react-native';
import {Dimen} from '../../../utils/helper';

const styles = StyleSheet.create({
  headerContainer: {
    // height: 60,
    width: Dimen.Width,
    paddingHorizontal: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  headerLeft: {flexDirection: 'row', flex: 0.8, alignItems: 'center'},
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 0.2,
  },
  userTextStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  CaroItemContainer: {
    height: '100%',
    width: Dimen.Width - 40,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  CaroItemContainerBg: {
    height: Dimen.Width * 0.45,
    width: Dimen.Width - 40,
    marginHorizontal: 20,
    overflow: 'hidden',
    borderRadius: 30,
    marginTop: 20,
  },
  CarItemTopContainer: {
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CarItemBottomContainer: {
    paddingHorizontal: 25,
  },
  scrollIndicatorContainer: {
    width: '100%',
    marginTop: -25,
    alignItems: 'center',
  },
  scrollIndicatorContainerView: {
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  scrollIndicatorCircle: {
    width: 6,
    height: 6,
    marginHorizontal: 2,
    borderRadius: 3,
  },
});
export default styles;
