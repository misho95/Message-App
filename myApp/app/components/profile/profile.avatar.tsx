import {Image, StyleSheet} from 'react-native';

type PropsType = {
  url: string;
  width?: number;
  height?: number;
};

const ProfileAvatar = ({url, width, height}: PropsType) => {
  return (
    <Image
      style={width && height ? {width, height} : styles.avatar}
      source={require('../../assets/imgs/Avatar.png')}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 99,
  },
});

export default ProfileAvatar;
