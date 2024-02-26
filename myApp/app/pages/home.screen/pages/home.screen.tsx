import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppContainer from '../../../components/app.container';
import {useTranslation} from 'react-i18next';
import IndexSwiper from '../../../components/index.swiper';

const HomeScreen = ({navigation}) => {
  const {t} = useTranslation();

  return (
    <AppContainer navigation={navigation}>
      <View style={{flexDirection: 'column', gap: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.bigTitle}>{t('home.dailyOffer')}</Text>
          <Pressable>
            <Text style={styles.smallTitle}>{t('home.seeAll')}</Text>
          </Pressable>
        </View>
        <ImageBackground
          style={styles.sliderBG}
          source={require('../../../assets/imgs/daily.png')}>
          <IndexSwiper />
        </ImageBackground>
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
  smallTitle: {
    fontSize: 12,
    lineHeight: 24,
  },
});

export default HomeScreen;
