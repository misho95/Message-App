import {Image, StyleSheet, View} from 'react-native';

const ProfileEditAvatar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../../../../../assets/imgs/Avatar.png')}
        />
        <View style={styles.cover}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#919EAB',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    height: 96,
    width: 96,
  },
  avatar: {
    position: 'absolute',
  },
  cover: {
    backgroundColor: '#21212133',
    position: 'absolute',
    zIndex: 10,
    height: 96,
    width: 96,
    borderRadius: 9999,
  },
});

export default ProfileEditAvatar;
