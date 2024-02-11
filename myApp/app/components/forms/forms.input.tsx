import {useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type PropsType = {
  secured: boolean;
  placeholder: string;
};

const FormInputs = ({secured, placeholder}: PropsType) => {
  const [hide, setHide] = useState(secured);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={hide}
      />
      {secured && (
        <TouchableOpacity style={styles.icon} onPress={() => setHide(!hide)}>
          <Image source={require('../../assets/imgs/eye-slash.png')} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  },
  input: {
    width: '100%',
    height: 54,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#8B8B8B33',
    padding: 10,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 18,
  },
});

export default FormInputs;
