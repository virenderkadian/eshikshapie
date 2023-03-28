import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  headerText: {
    color: 'black',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '500',
  },
  imgStyle: {width: '70%', height: '40%', marginTop: 20},
  descText: {marginTop: 20, fontSize: 17, color: 'black'},
  contactContainer: {
    borderWidth: 2,
    width: '100%',
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    flexDirection: 'row',
  },
  contactIconContainer: {
    borderRadius: 60,
    padding: 30,
    backgroundColor: '#e8ebfd',
  },
  contactTextContainer: {
    marginLeft: 25,
    paddingVertical: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
export default styles;
