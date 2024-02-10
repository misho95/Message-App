import {Button, Text, View} from 'react-native';

const ProfileDetaileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Text>Profile Detaile Screen</Text>
    </View>
  );
};

export default ProfileDetaileScreen;
