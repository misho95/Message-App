import {useTranslation} from 'react-i18next';
import {Image, Pressable, StyleSheet, Switch, Text, View} from 'react-native';
import {useTheme} from '../../utils/global.store';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileLinks = ({navigation}) => {
  const {t} = useTranslation();

  const {theme, toggleTheme} = useTheme();

  useEffect(() => {
    const saveTheme = async () => {
      try {
        await AsyncStorage.setItem('theme', theme);
      } catch (e) {
        // saving error
      }
    };

    saveTheme();
  }, [theme]);

  const linksList = [
    {
      id: 1,
      title: t('profileNav.profile'),
      url: 'profile/detaile',
      icon: <Image source={require('../../assets/icons/user.png')} />,
    },
    {
      id: 2,
      title: t('profileNav.about'),
      url: 'profile/about',
      icon: <Image source={require('../../assets/icons/logo.png')} />,
    },
    {
      id: 3,
      title: t('profileNav.history'),
      url: 'profile/about',
      icon: <Image source={require('../../assets/icons/coins.png')} />,
    },
    {
      id: 4,
      title: t('profileNav.payment'),
      url: 'profile/about',
      icon: <Image source={require('../../assets/icons/credit-card.png')} />,
    },
    {
      id: 5,
      title: t('profileNav.support'),
      url: 'profile/about',
      icon: <Image source={require('../../assets/icons/phone-call.png')} />,
    },
  ];

  return (
    <View style={styles.container}>
      {linksList.map(link => {
        return (
          <Pressable
            style={theme === 'light' ? styles.nav : styles.navDark}
            key={link.id}
            onPress={() => navigation.navigate(link.url)}>
            {link.icon}
            <Text style={theme === 'dark' && styles.textDark}>
              {link.title}
            </Text>
          </Pressable>
        );
      })}
      <Pressable
        style={
          theme === 'light'
            ? {...styles.nav, justifyContent: 'space-between'}
            : {...styles.navDark, justifyContent: 'space-between'}
        }>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Image source={require('../../assets/icons/moon.png')} />
          <Text style={theme === 'dark' && styles.textDark}>
            {t('profileNav.darkMode')}
          </Text>
        </View>
        <Switch
          trackColor={{false: '#A0148A', true: '#fff'}}
          thumbColor={theme === 'light' ? '#FDC8F5' : '#262626'}
          ios_backgroundColor="#A0148A"
          value={theme !== 'light'}
          onValueChange={() => toggleTheme()}
        />
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
    shadowColor: '#919EAB',
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  navDark: {
    width: '98%',
    paddingHorizontal: 23,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    backgroundColor: '#27272a',
    borderRadius: 16,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '#fff',
    shadowOpacity: 0.08,
    shadowRadius: 2,
  },
  textDark: {
    color: '#fff',
  },
});

export default ProfileLinks;
