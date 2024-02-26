import {StyleSheet, Text, View} from 'react-native';

const ProfileAccount = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 16,
    shadowOffset: {width: 0, height: 2},
    shadowColor: '919EAB',
    shadowOpacity: 0.05,
    shadowRadius: 1,
    backgroundColor: '#fff',
  },
});

export default ProfileAccount;
