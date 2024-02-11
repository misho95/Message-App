import {Button, Text, View} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile.Detaile')}
      />
      <Button
        title="About"
        onPress={() => navigation.navigate('Profile.About')}
      />
      <Button
        title="Payment History"
        onPress={() => navigation.navigate('Profile.PaymentHistory')}
      />
      <Button
        title="Payment Method"
        onPress={() => navigation.navigate('Profile.PaymentMethod')}
      />
      <Button
        title="Contact"
        onPress={() => navigation.navigate('Profile.Contact')}
      />
    </View>
  );
};

export default ProfileScreen;
