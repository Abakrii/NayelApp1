import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  textView: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  checkboxLabel: {
    margin: 8,
  },
  pickerView: {
    height: 50,
    width: 200,
  },
  descriptionStyle: {
    padding: 10,
  },
  buttonView: {
    paddingTop: 100,
  },
  textError: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default styles;
