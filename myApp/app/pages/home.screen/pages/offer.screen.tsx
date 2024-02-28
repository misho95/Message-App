import {Image, StyleSheet, Text, View} from 'react-native';
import AppContainer from '../../../components/app.container';
import {useTheme} from '../../../utils/global.store';

const OfferScreen = ({navigation}) => {
  const {theme} = useTheme();

  return (
    <AppContainer navigation={navigation}>
      <View style={styles.topContainer}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/imgs/logo.png')}
        />
        <Text style={theme === 'light' ? styles.title : styles.titleDark}>
          კომპანიის სახელი
        </Text>
        <Text style={theme === 'light' ? styles.discount : styles.discountDark}>
          20%
        </Text>
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
});

export default OfferScreen;
