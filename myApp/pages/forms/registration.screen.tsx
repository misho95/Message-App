import {Button, Text, View} from 'react-native';

const RegistrationScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Text>Registration Screen</Text>
      <Button
        title="Login Screen"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Reset Password Screen"
        onPress={() => navigation.navigate('Reset')}
      />
    </View>
  );
};

export default RegistrationScreen;
