import {Image, StyleSheet} from 'react-native';

type PropsType = {
  url: string;
  width?: number;
  height?: number;
};

const ProfileAvatar = ({url, width, height}: PropsType) => {
  return (
    <Image style={{...styles.avatar, width, height}} source={require(url)} />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 20,
    height: 20,
  },
});

export default ProfileAvatar;
