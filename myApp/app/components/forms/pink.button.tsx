import {useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const PinkButton = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      style={pressed ? styles.buttonPress : styles.button}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}>
      <Text style={styles.title}>Submit</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    borderRadius: 12,
    backgroundColor: '#FDC8F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPress: {
    width: '100%',
    height: 60,
    borderRadius: 12,
    backgroundColor: '#FDC8F5',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'scale(0.98)',
  },
  title: {
    color: '#A0148A',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default PinkButton;
