import {StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';

const IndexSwiper = () => {
  return (
    <Swiper
      style={styles.wrapper}
      horizontal={false}
      autoplay
      activeDotColor="#fff">
      <View style={styles.slide}>
        <Text style={styles.text}>Hello Swiper</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>Beautiful</Text>
      </View>
      <View style={styles.slide}>
        <Text style={styles.text}>And simple</Text>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default IndexSwiper;
