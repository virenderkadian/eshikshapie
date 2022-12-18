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
    marginTop: 80,
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    // textAlign:'',
    marginBottom: 20,
  },
  socialView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  socialContainer: {
    borderWidth: 1,
    borderColor: '#F2F2F2',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 15,
    // justifyContent: 'center',
  },
  signContainer: {
    paddingVertical: 13,
    alignItems: 'center',
    // marginBottom: 15,
    borderRadius: 30,
    backgroundColor: '#3E5DEE',
    marginVertical: 30,
  },
});
export default styles;
