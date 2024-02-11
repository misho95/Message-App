import {useNavigation} from '@react-navigation/native';
import {View, Image, StyleSheet, Pressable} from 'react-native';

const AppHeader = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.navigate('Login')}>
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
  },
});

export default AppHeader;
