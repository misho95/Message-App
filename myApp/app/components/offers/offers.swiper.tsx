import {StyleSheet, Text, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {useLang} from '../../utils/global.store';

const data = [
  {
    id: 1,
    title: {
      en: 'Company Name',
      ge: 'კომპანიის სახელი',
    },
    discount: 20,
  },
  {
    id: 2,
    title: {
      en: 'Company Name',
      ge: 'კომპანიის სახელი',
    },
    discount: 10,
  },
  {
    id: 3,
    title: {
      en: 'Company Name',
      ge: 'კომპანიის სახელი',
    },
    discount: 15,
  },
];

const OffersSwiper = () => {
  const {lang} = useLang();

  return (
    <Swiper
      style={styles.wrapper}
      horizontal={false}
      autoplay
      activeDotColor="#fff">
      {data.map(offer => {
        return (
          <View key={offer.id} style={styles.slide}>
            <View style={styles.container}>
              <Image
                style={styles.icon}
                source={require('../../assets/imgs/logo.png')}
              />
              <Text style={styles.text}>{offer.title[lang]}</Text>
            </View>
            <Text style={styles.discount}>{offer.discount}%</Text>
          </View>
        );
      })}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 40,
    paddingLeft: 20,
  },
  container: {flexDirection: 'row', gap: 10, alignItems: 'center'},
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'normal',
  },
  discount: {
    color: '#fff',
    fontSize: 26,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default OffersSwiper;
