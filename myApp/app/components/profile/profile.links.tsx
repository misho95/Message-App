import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const linksList = [
  {
    id: 1,
    title: 'პროფილი',
    url: 'Profile.Detaile',
    icon: <Image source={require('../../assets/icons/user.png')} />,
  },
  {
    id: 2,
    title: 'ლოიალობის შესახებ',
    url: 'Profile.About',
    icon: <Image source={require('../../assets/icons/user.png')} />,
  },
];

const ProfileLinks = ({navigation}) => {
  return (
    <View style={styles.container}>
      {linksList.map(link => {
        return (
          <Pressable
            style={styles.nav}
            key={link.id}
            onPress={() => navigation.navigate(link.url)}>
            {link.icon}
            <Text>{link.title}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
  },
  nav: {
    width: '98%',
    paddingHorizontal: 23,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '919EAB',
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
});

export default ProfileLinks;
