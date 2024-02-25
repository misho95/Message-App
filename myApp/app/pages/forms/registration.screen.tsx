import {StyleSheet, Text, View} from 'react-native';
import FormInputs from '../../components/forms/forms.input';
import FormsContainer from '../../components/forms/forms.container';
import PinkButton from '../../components/forms/pink.button';
import {useTranslation} from 'react-i18next';

type PropsType = {
  navigation: any;
};

const RegistrationScreen = ({navigation}: PropsType) => {
  const {t} = useTranslation();

  return (
    <>
      <FormsContainer
        navigation={navigation}
        title={t('forms.registration')}
        height={{minHeight: 525, maxHeight: 575}}>
        <View style={styles.container}>
          {/* inputs */}
          <View style={{paddingVertical: 15, flex: 1, gap: 15}}>
            <FormInputs secured={false} placeholder={t('forms.email')} />
            <FormInputs secured={true} placeholder={t('forms.password')} />
            <FormInputs secured={true} placeholder={t('forms.rePassword')} />
          </View>
          {/*  bottom */}
          <View style={styles.flexRow}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              <Text style={{color: '#999999'}}>{t('forms.remember')}</Text>
            </View>
            <Text
              style={{color: '#999999'}}
              onPress={() => navigation.navigate('Reset')}>
              {t('forms.lostPassword')}
            </Text>
          </View>
          <PinkButton title={t('forms.login')} />
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              width: '80%',
              alignSelf: 'center',
            }}>
            {t('forms.alreadyHaveAnAccountKidnest')} {t('forms.pass')}
            <Text
              style={{color: '#B244A2'}}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              {' '}
              {t('forms.auth')}
            </Text>
          </Text>
        </View>
      </FormsContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RegistrationScreen;
