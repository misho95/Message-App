// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './app/pages/forms/login.screen.page';
import IndexScreen from './app/pages/home.screen/index.screen';
import RegistrationScreen from './app/pages/forms/registration.screen';
import ResetScreen from './app/pages/forms/reset.screen';
import './lang-service/i18n';
import {useTheme} from './app/utils/global.store';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useColorScheme} from 'react-native';

function App() {
  const auth = true;

  const Stack = createNativeStackNavigator();

  const colorScheme = useColorScheme();

  const {theme, setTheme} = useTheme();

  useEffect(() => {
    const getTheme = async () => {
      try {
        const value = await AsyncStorage.getItem('theme');
        setTheme(value as 'light' | 'dark');
        if (value === null) {
          setTheme(colorScheme as 'light' | 'dark');
        }
      } catch (e) {
        // error reading value
      }
    };

    getTheme();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={auth ? 'Index' : 'Login'}
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme === 'light' ? '#fff' : '#171717',
          },
        }}>
        {auth ? (
          <Stack.Screen name="Index" component={IndexScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Reset" component={ResetScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
