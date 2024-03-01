import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppContainer from '../../../components/app.container';
import {useTranslation} from 'react-i18next';
import OffersList from '../../../components/offers/offers.list';
import OffersSwiper from '../../../components/offers/offers.swiper';
import {useTheme} from '../../../utils/global.store';

const HomeScreen = ({navigation}) => {
  const {t} = useTranslation();
  const {theme} = useTheme();

  return (
    <AppContainer navigation={navigation}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          gap: 20,
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={theme === 'light' ? styles.bigTitle : styles.bigTitleDark}>
            {t('home.dailyOffer')}
          </Text>
          <Pressable>
            <Text
              style={
                theme === 'light' ? styles.smallTitle : styles.smallTitleDark
              }>
              {t('home.seeAll')}
            </Text>
          </Pressable>
        </View>
        <ImageBackground
          style={styles.sliderBG}
          source={require('../../../assets/imgs/daily.png')}>
          <OffersSwiper />
        </ImageBackground>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={theme === 'light' ? styles.bigTitle : styles.bigTitleDark}>
            {t('home.yourOffers')}
          </Text>
          <Pressable>
            <Text
              style={
                theme === 'light' ? styles.smallTitle : styles.smallTitleDark
              }>
              {t('home.seeAll')}
            </Text>
          </Pressable>
        </View>
        <ScrollView style={{height: '100%'}}>
          <View style={{flex: 1, flexDirection: 'column', gap: 10}}>
            <OffersList navigation={navigation} />
            <OffersList navigation={navigation} />
            <OffersList navigation={navigation} />
            <OffersList navigation={navigation} />
            <OffersList navigation={navigation} />
            <OffersList navigation={navigation} />
            <OffersList navigation={navigation} />
            <OffersList navigation={navigation} />
            <OffersList navigation={navigation} />
            <OffersList navigation={navigation} />
          </View>
        </ScrollView>
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  sliderBG: {
    width: 358,
    height: 120,
  },
  bigTitle: {
    fontSize: 20,
    lineHeight: 24,
  },
  bigTitleDark: {
    fontSize: 20,
    lineHeight: 24,
    color: '#fff',
  },
  smallTitle: {
    fontSize: 12,
    lineHeight: 24,
  },
  smallTitleDark: {
    fontSize: 12,
    lineHeight: 24,
    color: '#fff',
  },
});

export default HomeScreen;
