import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './pages/profile.screen';
import ProfileDetaileScreen from './pages/profile.detaile';
import ProfileAboutScreen from './pages/profile.about';
import {useTheme} from '../../../../utils/global.store';

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();
  const {theme} = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: theme === 'light' ? '#fff' : '#171717'},
      }}
      initialRouteName={'Profile.Index'}>
      <Stack.Screen name="Profile.Index" component={ProfileScreen} />
      <Stack.Screen name="Profile.Detaile" component={ProfileDetaileScreen} />
      <Stack.Screen name="Profile.About" component={ProfileAboutScreen} />
      <Stack.Screen name="Profile.PaymentHistory" component={ProfileScreen} />
      <Stack.Screen name="Profile.PaymentMethod" component={ProfileScreen} />
      <Stack.Screen name="Profile.Contact" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
