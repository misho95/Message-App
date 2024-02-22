import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/home.screen';
import ProfileStack from './pages/profile/profile.stack';
import SearchScreen from './pages/search.screen';
import FavScreen from './pages/fav.screen';
import {Image} from 'react-native';

const IndexScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#B244A2',
        tabBarInactiveTintColor: '#637381',
        tabBarStyle: {height: 81, paddingVertical: 8},
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
        name="მთავარი"
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
        name="ძიება"
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
        name="ფავორიტები"
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
        name="პროფილი"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default IndexScreen;
