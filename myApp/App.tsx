// In App.js in a new project

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './pages/forms/login.screen.page';
import IndexScreen from './pages/home.screen/index.screen';
import RegistrationScreen from './pages/forms/registration.screen';
import ResetScreen from './pages/forms/reset.screen';

function App() {
  const auth = false;

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
