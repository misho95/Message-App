import {Button, Text, View} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Text>Login Screen</Text>
      <Button
        title="Registration Screen"
        onPress={() => navigation.navigate('Registration')}
      />
      <Button
        title="Reset Password Screen"
        onPress={() => navigation.navigate('Reset')}
      />
    </View>
  );
};

export default LoginScreen;
