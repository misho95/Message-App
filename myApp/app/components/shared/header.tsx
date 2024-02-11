import {useNavigation} from '@react-navigation/native';
import {View, Image, StyleSheet, Pressable} from 'react-native';

const AppHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.navigate('offers' as never)}>
        <Image
          source={require('../../assets/imgs/logo.header.png')}
          style={{width: 130, height: 42}}
        />
      </Pressable>
      <Image
        source={require('../../assets/imgs/flag.png')}
        style={{width: 33, height: 22}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default AppHeader;
