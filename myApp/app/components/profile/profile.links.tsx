import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Image, Pressable, StyleSheet, Switch, Text, View} from 'react-native';

const ProfileLinks = ({navigation}) => {
  const [dark, setDark] = useState(false);

  const {t} = useTranslation();

  const linksList = [
    {
      id: 1,
      title: t('profileNav.profile'),
      url: 'Profile.Detaile',
      icon: <Image source={require('../../assets/icons/user.png')} />,
    },
    {
      id: 2,
      title: t('profileNav.about'),
      url: 'Profile.About',
      icon: <Image source={require('../../assets/icons/logo.png')} />,
    },
    {
      id: 3,
      title: t('profileNav.history'),
      url: 'Profile.About',
      icon: <Image source={require('../../assets/icons/coins.png')} />,
    },
    {
      id: 4,
      title: t('profileNav.payment'),
      url: 'Profile.About',
      icon: <Image source={require('../../assets/icons/credit-card.png')} />,
    },
    {
      id: 5,
      title: t('profileNav.support'),
      url: 'Profile.About',
      icon: <Image source={require('../../assets/icons/phone-call.png')} />,
    },
  ];

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
      <Pressable style={{...styles.nav, justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Image source={require('../../assets/icons/moon.png')} />
          <Text>{t('profileNav.darkMode')}</Text>
        </View>
        <Switch value={dark} onChange={() => setDark(!dark)} />
      </Pressable>
    </View>
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
