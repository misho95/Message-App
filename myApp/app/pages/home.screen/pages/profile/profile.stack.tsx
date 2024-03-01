import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './pages/profile.screen';
import ProfileDetaileScreen from './pages/profile.detaile';
import ProfileAboutScreen from './pages/profile.about';
import {useTheme} from '../../../../utils/global.store';
import ProfileEditScreen from './pages/profile.edit';

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();
  const {theme} = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: theme === 'light' ? '#fff' : '#171717'},
      }}
      initialRouteName={'profile/index'}>
      <Stack.Screen name="profile/index" component={ProfileScreen} />
      <Stack.Screen name="profile/detaile" component={ProfileDetaileScreen} />
      <Stack.Screen name="profile/edit" component={ProfileEditScreen} />
      <Stack.Screen name="profile/about" component={ProfileAboutScreen} />
      <Stack.Screen name="profile/paymentHistory" component={ProfileScreen} />
      <Stack.Screen name="profile/paymentMethod" component={ProfileScreen} />
      <Stack.Screen name="profile/contact" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
