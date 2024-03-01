import {Pressable, StyleSheet, Text} from 'react-native';

type PropsType = {
  title: string;
  handler: () => void;
};

const PinkButton = ({title, handler}: PropsType) => {
  return (
    <Pressable onPress={handler} style={styles.button}>
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FDC8F5',
    color: '#A0148A',
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
  },
});

export default PinkButton;
