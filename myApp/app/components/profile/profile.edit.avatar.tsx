import {Image, Pressable, StyleSheet, View} from 'react-native';
import {useTheme} from '../../utils/global.store';

const ProfileEditAvatar = () => {
  const {theme} = useTheme();

  return (
    <View style={theme === 'light' ? styles.container : styles.containerDark}>
      <Pressable style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../../assets/imgs/Avatar.png')}
        />
        <Image source={require('../../assets/icons/upload-photo.png')} />
        <View style={styles.cover} />
      </Pressable>
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
  containerDark: {
    width: '100%',
    backgroundColor: '#27272a',
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
    justifyContent: 'center',
    alignItems: 'center',
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
