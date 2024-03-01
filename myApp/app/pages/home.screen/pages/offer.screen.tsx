import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppContainer from '../../../components/app.container';
import {useLang, useTheme} from '../../../utils/global.store';
import PinkButton from '../../../components/shared/pink.button';
import {useTranslation} from 'react-i18next';

const OfferScreen = ({navigation}) => {
  const {theme} = useTheme();

  const {t} = useTranslation();

  const {lang} = useLang();

  const offerData = {
    title: {
      en: 'Company Name',
      ge: 'კომპანიის სახელი',
    },
    detaile: {
      en: 'Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.',
      ge: ` აქ იყოს მოკლე ტექსტი კომპანიაზე და ლოიალობის პირობებზე. რამდენჯერ
      აქვთ გამოყენების საშუალება. და მოვიფიქროთ კიდე რამე ;დ`,
    },
  };

  return (
    <AppContainer navigation={navigation}>
      <View
        style={{
          flex: 1,
          gap: 10,
          justifyContent: 'space-between',
          paddingBottom: 10,
        }}>
        <ScrollView style={{height: '100%'}}>
          <View style={styles.topContainer}>
            <Image
              style={styles.avatar}
              source={require('../../../assets/imgs/logo.png')}
            />
            <Text style={theme === 'light' ? styles.title : styles.titleDark}>
              {offerData.title[lang]}
            </Text>
            <Text
              style={theme === 'light' ? styles.discount : styles.discountDark}>
              20%
            </Text>
            <Text
              style={
                theme === 'light'
                  ? {color: '#000', padding: 20}
                  : {color: '#fff', padding: 20}
              }>
              CODE
            </Text>
            <Text
              style={theme === 'light' ? styles.detaile : styles.detaileDark}>
              {offerData.detaile[lang]}
            </Text>
          </View>
        </ScrollView>
        <PinkButton
          title={t('shared.goBack')}
          handler={() => navigation.goBack()}
        />
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 9999,
    objectFit: 'cover',
  },
  title: {
    fontSize: 20,
    color: '#637381',
  },
  titleDark: {
    fontSize: 20,
    color: '#fff',
  },
  discount: {
    fontSize: 20,
    color: '#212B36',
  },
  discountDark: {
    fontSize: 20,
    color: '#fff',
  },
  detaile: {
    color: '#637381',
    fontSize: 16,
  },
  detaileDark: {
    color: '#fff',
    fontSize: 16,
  },
});

export default OfferScreen;
