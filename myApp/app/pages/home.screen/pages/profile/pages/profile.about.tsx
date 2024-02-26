import {Button, Text, View} from 'react-native';

const ProfileAboutScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Text>Profile About Screen</Text>
    </View>
  );
};

export default ProfileAboutScreen;
