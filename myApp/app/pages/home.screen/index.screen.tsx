import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/home.screen';
import ProfileStack from './pages/profile/profile.stack';
import SearchScreen from './pages/search.screen';
import FavScreen from './pages/fav.screen';
import MyTabBar from './my.tap.bar';
import {Image} from 'react-native';

const IndexScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#B244A2',
        tabBarInactiveTintColor: '#637381',
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
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorite" component={FavScreen} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default IndexScreen;
