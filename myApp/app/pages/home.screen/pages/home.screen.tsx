import {SafeAreaView, Text, View} from 'react-native';
import AppContainer from '../../../components/app.container';
import AppHeader from '../../../components/shared/header';
import {useTranslation} from 'react-i18next';

const HomeScreen = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <AppContainer navigation={navigation}>
      <Text>{t('home')}</Text>
    </AppContainer>
  );
};

export default HomeScreen;
