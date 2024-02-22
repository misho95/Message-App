// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './app/pages/forms/login.screen.page';
import IndexScreen from './app/pages/home.screen/index.screen';
import RegistrationScreen from './app/pages/forms/registration.screen';
import ResetScreen from './app/pages/forms/reset.screen';

function App() {
  const auth = true;

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={auth ? 'Index' : 'Login'}
        screenOptions={{headerShown: false}}>
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
