import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
    icon: <Image source={require('../../assets/icons/logo.png')} />,
  },
  {
    id: 3,
    title: 'ლოიალობის შესახებ',
    url: 'Profile.About',
    icon: <Image source={require('../../assets/icons/logo.png')} />,
  },
  {
    id: 4,
    title: 'ლოიალობის შესახებ',
    url: 'Profile.About',
    icon: <Image source={require('../../assets/icons/logo.png')} />,
  },
  {
    id: 5,
    title: 'ლოიალობის შესახებ',
    url: 'Profile.About',
    icon: <Image source={require('../../assets/icons/logo.png')} />,
  },
  {
    id: 6,
    title: 'ლოიალობის შესახებ',
    url: 'Profile.About',
    icon: <Image source={require('../../assets/icons/logo.png')} />,
  },
];

const ProfileLinks = ({navigation}) => {
  return (
    <ScrollView>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
    paddingVertical: 10,
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
