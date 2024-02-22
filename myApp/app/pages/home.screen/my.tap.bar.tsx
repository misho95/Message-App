import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const MyTabBar = ({navigation}) => {
  const links = [
    {
      id: 1,
      url: 'Home',
      title: 'მთავარი',
      icon: {
        default: 'src/assets/icons/tabs/home.svg',
        active: 'src/assets/icons/tabs/home.active.svg',
      },
    },
    {
      id: 2,
      url: 'Search',
      title: 'ძიება',
    },
    {
      id: 3,
      url: 'Favorite',
      title: 'ფავორიტები',
    },
    {
      id: 4,
      url: 'Profile',
      title: 'პროფილი',
    },
  ];

  return (
    <View style={styles.container}>
      {links.map(l => {
        return (
          <Pressable
            key={l.id}
            onPress={() => {
              navigation.navigate(l.url);
            }}>
            <Image source={require('../../assets/icons/tabs/home.png')} />
            <Text>{l.title}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 80,
  },
});

export default MyTabBar;
