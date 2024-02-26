import {Button, Text, View} from 'react-native';
import ProfileButton from '../../../../../components/profile/profile.button';
import AppContainer from '../../../../../components/app.container';

const ProfileScreen = ({navigation}) => {
  return (
    <AppContainer navigation={navigation}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <ProfileButton title={'გამოსვლა'} />
        </View>
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
    </AppContainer>
  );
};

export default ProfileScreen;
