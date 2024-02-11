import {Button, Text, View} from 'react-native';

const ResetScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Text>Reset Screen</Text>
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

export default ResetScreen;
