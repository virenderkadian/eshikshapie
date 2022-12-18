import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  loginContainer: {width: '90%', paddingHorizontal: 16, paddingTop: 10},
  welcomeText: {
    fontSize: 30,
    color: 'black',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  socialContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderColor: 'grey',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  signContainer: {
    paddingVertical: 13,
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 30,
    backgroundColor: '#3E5DEE',
    marginVertical: 20,
  },
  socilaText: {paddingStart: 10, fontWeight: '500', color: 'black'},
});
export default styles;
