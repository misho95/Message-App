import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AppContainer from '../../../../../components/app.container';
import {useTheme} from '../../../../../utils/global.store';
import ProfileInput from '../../../../../components/profile/profile.input';
import {useState} from 'react';
import PinkButton from '../../../../../components/shared/pink.button';
import {useTranslation} from 'react-i18next';
import ProfileEditAvatar from '../../../../../components/profile/profile.edit.avatar';

const ProfileEditScreen = ({navigation}) => {
  const {theme} = useTheme();

  const {t} = useTranslation();

  const [firstName, setFirstName] = useState('მანანა');
  const [lastName, setLastName] = useState('რუსიტაშვილი');
  const [email, setEmail] = useState('rusitashvilimanana@gmail.com');
  const [mobile, setMobile] = useState('598887766');

  const renderInputs = [
    {
      title: t('profile.firstname'),
      value: firstName,
      set: setFirstName,
    },
    {
      title: t('profile.lastname'),
      value: lastName,
      set: setLastName,
    },
    {
      title: t('forms.email'),
      value: email,
      set: setEmail,
    },
    {
      title: t('forms.mobile'),
      value: mobile,
      set: setMobile,
    },
  ];

  return (
    <AppContainer navigation={navigation}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          gap: 20,
          paddingBottom: 10,
        }}>
        <View style={styles.container}>
          <Text style={theme === 'light' ? styles.title : styles.titleDark}>
            {t('profileNav.profile')}
          </Text>
          <ProfileEditAvatar />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <TouchableWithoutFeedback
              style={{flex: 1}}
              onPress={Keyboard.dismiss}>
              <ScrollView>
                {renderInputs.map(i => {
                  return (
                    <ProfileInput
                      title={i.title}
                      value={i.value}
                      set={i.set}
                      edit={true}
                    />
                  );
                })}
              </ScrollView>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
        <PinkButton title={t('shared.save')} handler={() => {}} />
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
  },
  titleDark: {
    fontSize: 20,
    lineHeight: 24,
    color: '#fff',
  },
});

export default ProfileEditScreen;
