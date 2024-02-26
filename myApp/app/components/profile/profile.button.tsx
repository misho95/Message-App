import {ReactNode} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

type PropsType = {
  title: string;
  icon?: ReactNode;
};

const ProfileButton = ({title, icon}: PropsType) => {
  return (
    <Pressable style={styles.button}>
      {icon ? icon : null}
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: '#212B36',
    borderRadius: 8,
    gap: 8,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 24,
  },
});

export default ProfileButton;
