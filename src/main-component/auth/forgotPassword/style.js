import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  imgStyle: {width: '70%', height: '40%', marginTop: 20},
  descText: {
    marginTop: 20,
    fontSize: 17,
    color: 'black',
    paddingHorizontal: 10,
  },
  contactContainer: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    flexDirection: 'row',
    marginHorizontal: 10,
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
