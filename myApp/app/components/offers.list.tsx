import {Image, StyleSheet, Text, View} from 'react-native';

const OffersList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        <Image source={require('../assets/imgs/logo.png')} />
        <Text style={styles.nameText}>კომპანიის სახელი</Text>
      </View>
      <Text style={styles.discountText}>20%</Text>
    </View>
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
    shadowColor: '919EAB',
    shadowOpacity: 0.05,
    shadowRadius: 1,
    backgroundColor: '#fff',
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
  discountText: {
    fontSize: 20,
    color: '#212B36',
  },
});

export default OffersList;
