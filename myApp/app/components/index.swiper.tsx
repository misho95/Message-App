import {StyleSheet, Text, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const IndexSwiper = () => {
  return (
    <Swiper
      style={styles.wrapper}
      horizontal={false}
      autoplay
      activeDotColor="#fff">
      <View style={styles.slide}>
        <View style={styles.container}>
          <Image source={require('../assets/imgs/logo.png')} />
          <Text style={styles.text}>კომპანიის სახელი</Text>
        </View>
        <Text style={styles.discount}>20%</Text>
      </View>
      <View style={styles.slide}>
        <View style={styles.container}>
          <Image source={require('../assets/imgs/logo.png')} />
          <Text style={styles.text}>კომპანიის სახელი</Text>
        </View>
        <Text style={styles.discount}>10%</Text>
      </View>
      <View style={styles.slide}>
        <View style={styles.container}>
          <Image source={require('../assets/imgs/logo.png')} />
          <Text style={styles.text}>კომპანიის სახელი</Text>
        </View>
        <Text style={styles.discount}>15%</Text>
      </View>
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
    fontSize: 16,
    fontWeight: 'normal',
  },
  discount: {
    color: '#fff',
    fontSize: 20,
  },
});

export default IndexSwiper;
