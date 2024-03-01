import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useTheme} from '../../utils/global.store';

type PropsType = {
  title: string;
  value: string;
  edit: boolean;
};

const ProfileInput = ({title, value, edit}: PropsType) => {
  const {theme} = useTheme();

  return (
    <View style={styles.container}>
      <Text style={theme === 'light' ? styles.title : styles.titleDark}>
        {title}
      </Text>
      <TextInput editable={edit} value={value} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 6,
    width: '100%',
  },
  title: {
    fontSize: 14,
    color: '#212B36',
    lineHeight: 24,
  },
  titleDark: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 24,
  },
  input: {
    width: '100%',
    height: 54,
    borderWidth: 1,
    borderColor: '#8B8B8B33',
    borderRadius: 12,
    paddingHorizontal: 10,
    color: '#8B8B8B',
  },
});

export default ProfileInput;
