import {Button, Image, Pressable, Text, View} from 'react-native';
import ProfileButton from '../../../../../components/profile/profile.button';
import AppContainer from '../../../../../components/app.container';
import ProfileAccount from '../../../../../components/profile/profile.account';
import ProfileLinks from '../../../../../components/profile/profile.links';

const ProfileScreen = ({navigation}) => {
  return (
    <AppContainer navigation={navigation}>
      <View style={{flex: 1, flexDirection: 'column', gap: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <ProfileButton
            title={'გამოსვლა'}
            icon={
              <Image
                source={require('../../../../../assets/icons/log-out.png')}
              />
            }
          />
        </View>
        <ProfileAccount />
        <ProfileLinks navigation={navigation} />
        {/* <Button
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
        /> */}
      </View>
    </AppContainer>
  );
};

export default ProfileScreen;
