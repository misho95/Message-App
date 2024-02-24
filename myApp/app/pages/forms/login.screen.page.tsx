import {StyleSheet, Text, View} from 'react-native';
import FormInputs from '../../components/forms/forms.input';
import FormsContainer from '../../components/forms/forms.container';
import PinkButton from '../../components/forms/pink.button';
import {useTranslation} from 'react-i18next';

type PropsType = {
  navigation: any;
};

const LoginScreen = ({navigation}: PropsType) => {
  const {t} = useTranslation();

  return (
    <>
      <FormsContainer
        navigation={navigation}
        title={t('login')}
        height={{minHeight: 455, maxHeight: 505}}>
        <View style={styles.container}>
          {/* inputs */}
          <View style={{paddingVertical: 15, flex: 1, gap: 15}}>
            <FormInputs secured={false} placeholder={t('email')} />
            <FormInputs secured={true} placeholder={t('password')} />
          </View>
          {/*  bottom */}
          <View style={styles.flexRow}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              <Text style={{color: '#999999'}}>{t('rememeber')}</Text>
            </View>
            <Text
              style={{color: '#999999'}}
              onPress={() => navigation.navigate('Reset')}>
              {t('lostPassword')}
            </Text>
          </View>
          <PinkButton title={t('login')} />
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              width: '80%',
              alignSelf: 'center',
            }}>
            {t('areYouNewToKidNest')}{' '}
            <Text
              style={{color: '#B244A2'}}
              onPress={() => {
                navigation.navigate('Registration');
              }}>
              {t('registration')}
            </Text>{' '}
            {t('now')}
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

export default LoginScreen;
