import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/home.screen';
import ProfileStack from './pages/profile/profile.stack';
import SearchScreen from './pages/search.screen';
import FavScreen from './pages/fav.screen';
import {Image, Platform} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../utils/global.store';

const IndexScreen = () => {
  const Tab = createBottomTabNavigator();

  const {t} = useTranslation();

  const {theme} = useTheme();

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: theme === 'light' ? '#fff' : '#171717',
        padding: 20,
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme === 'light' ? '#B244A2' : '#fff',
        tabBarInactiveTintColor: '#637381',
        tabBarStyle:
          Platform.OS === 'ios'
            ? {
                height: 101,
                paddingBottom: 40,
                backgroundColor: theme === 'light' ? '#fff' : '#171717',
              }
            : {
                height: 81,
                paddingBottom: 20,
                backgroundColor: theme === 'light' ? '#fff' : '#171717',
              },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) =>
            color !== '#637381' ? (
              <Image
                source={require('../../assets/icons/tabs/home-dash-active.png')}
              />
            ) : (
              <Image
                source={require('../../assets/icons/tabs/home-dash.png')}
              />
            ),
        }}
        name={t('nav.home')}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) =>
            color !== '#637381' ? (
              <Image
                source={require('../../assets/icons/tabs/search-active.png')}
              />
            ) : (
              <Image source={require('../../assets/icons/tabs/search.png')} />
            ),
        }}
        name={t('nav.search')}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) =>
            color !== '#637381' ? (
              <Image
                source={require('../../assets/icons/tabs/sparkle-active.png')}
              />
            ) : (
              <Image source={require('../../assets/icons/tabs/sparkle.png')} />
            ),
        }}
        name={t('nav.favorite')}
        component={FavScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) =>
            color !== '#637381' ? (
              <Image
                source={require('../../assets/icons/tabs/profile-active.png')}
              />
            ) : (
              <Image source={require('../../assets/icons/tabs/profile.png')} />
            ),
        }}
        name={t('nav.profile')}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default IndexScreen;
