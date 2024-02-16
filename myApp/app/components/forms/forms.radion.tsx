import {useContext, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {ActiveContext} from './forms.radio.group';

type PropsType = {
  title: string;
  value: string;
};

const FormsRadio = ({title, value}: PropsType) => {
  const contextValue = useContext(ActiveContext);

  if (contextValue === null) {
    return null;
  }

  const {active, setActive} = contextValue;

  return (
    <Pressable style={styles.container} onPress={() => setActive(value)}>
      <View style={styles.radio}>
        {active === value && <View style={styles.dot} />}
      </View>
      <Text>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#B244A2',
    padding: 4,
  },
  dot: {
    width: '100%',
    height: '100%',
    backgroundColor: '#B244A2',
    borderRadius: 2,
  },
});

export default FormsRadio;
