import {Pressable, StyleSheet, Text} from 'react-native';
import {useTheme} from '../../utils/global.store';

type PropsType = {
  title: string;
};

const DarkButton = ({title}: PropsType) => {
  const {theme} = useTheme();

  return (
    <Pressable style={theme === 'light' ? styles.button : styles.buttonDark}>
      <Text style={theme === 'light' ? {color: '#fff'} : {color: '#ccc'}}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#212B36',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 6,
  },
  buttonDark: {
    backgroundColor: '#27272a',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 6,
  },
});

export default DarkButton;
