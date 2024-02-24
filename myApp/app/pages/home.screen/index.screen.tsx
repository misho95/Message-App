import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/home.screen';
import ProfileStack from './pages/profile/profile.stack';
import SearchScreen from './pages/search.screen';
import FavScreen from './pages/fav.screen';
import {Image} from 'react-native';
import {useTranslation} from 'react-i18next';

const IndexScreen = () => {
  const Tab = createBottomTabNavigator();
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: '#fff', padding: 20}}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#B244A2',
        tabBarInactiveTintColor: '#637381',
        tabBarStyle: {height: 81, paddingBottom: 20},
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) =>
            color === '#B244A2' ? (
              <Image
                source={require('../../assets/icons/tabs/home-dash-active.png')}
              />
            ) : (
              <Image
                source={require('../../assets/icons/tabs/home-dash.png')}
              />
            ),
        }}
        name={t('home')}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) =>
            color === '#B244A2' ? (
              <Image
                source={require('../../assets/icons/tabs/search-active.png')}
              />
            ) : (
              <Image source={require('../../assets/icons/tabs/search.png')} />
            ),
        }}
        name={t('search')}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) =>
            color === '#B244A2' ? (
              <Image
                source={require('../../assets/icons/tabs/sparkle-active.png')}
              />
            ) : (
              <Image source={require('../../assets/icons/tabs/sparkle.png')} />
            ),
        }}
        name={t('favorite')}
        component={FavScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) =>
            color === '#B244A2' ? (
              <Image
                source={require('../../assets/icons/tabs/profile-active.png')}
              />
            ) : (
              <Image source={require('../../assets/icons/tabs/profile.png')} />
            ),
        }}
        name={t('profile')}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default IndexScreen;
