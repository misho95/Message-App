import {ReactNode} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useTheme} from '../../utils/global.store';

type PropsType = {
  title: string;
  icon?: ReactNode;
};

const ProfileButton = ({title, icon}: PropsType) => {
  const {theme} = useTheme();

  return (
    <Pressable style={theme === 'light' ? styles.button : styles.buttonDark}>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonDark: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: '#27272a',
    borderRadius: 8,
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 24,
  },
});

export default ProfileButton;
