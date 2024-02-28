import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useLang, useTheme} from '../../utils/global.store';

const data = {
  title: {
    en: 'Company Name',
    ge: 'კომპანიის სახელი',
  },
};

const OffersList = ({navigation}) => {
  const {lang} = useLang();
  const {theme} = useTheme();

  return (
    <Pressable
      onPress={() => navigation.navigate('home/offer')}
      style={theme === 'light' ? styles.container : styles.containerDark}>
      <View style={styles.flexRow}>
        <Image source={require('../../assets/imgs/logo.png')} />
        <Text style={theme === 'light' ? styles.nameText : styles.nameTextDark}>
          {data.title[lang]}
        </Text>
      </View>
      <Text
        style={
          theme === 'light' ? styles.discountText : styles.discountTextDark
        }>
        20%
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 84,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#919EAB',
    shadowOpacity: 0.05,
    shadowRadius: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  containerDark: {
    padding: 10,
    height: 84,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#fff',
    shadowOpacity: 0.05,
    shadowRadius: 1,
    backgroundColor: '#27272a',
    borderRadius: 16,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  nameText: {
    fontSize: 16,
    color: '#637381',
  },
  nameTextDark: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  discountText: {
    fontSize: 20,
    color: '#212B36',
  },
  discountTextDark: {
    fontSize: 20,
    color: '#fff',
  },
});

export default OffersList;
