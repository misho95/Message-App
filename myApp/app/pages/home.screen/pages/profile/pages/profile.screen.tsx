import {Button, Image, Pressable, ScrollView, Text, View} from 'react-native';
import ProfileButton from '../../../../../components/profile/profile.button';
import AppContainer from '../../../../../components/app.container';
import ProfileAccount from '../../../../../components/profile/profile.account';
import ProfileLinks from '../../../../../components/profile/profile.links';
import {useTranslation} from 'react-i18next';

const ProfileScreen = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <AppContainer navigation={navigation}>
      <View style={{flex: 1, flexDirection: 'column', gap: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <ProfileButton
            title={t('forms.logout')}
            icon={
              <Image
                source={require('../../../../../assets/icons/log-out.png')}
              />
            }
          />
        </View>
        <ScrollView>
          <ProfileAccount />
          <ProfileLinks navigation={navigation} />
        </ScrollView>
      </View>
    </AppContainer>
  );
};

export default ProfileScreen;
