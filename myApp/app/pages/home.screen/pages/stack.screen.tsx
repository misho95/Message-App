import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './home.screen';
import OfferScreen from './offer.screen';
import {useTheme} from '../../../utils/global.store';

const StackScreen = () => {
  const Stack = createNativeStackNavigator();
  const {theme} = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: theme === 'light' ? '#fff' : '#171717'},
      }}
      initialRouteName={'home/index'}>
      <Stack.Screen name="home/index" component={HomeScreen} />
      <Stack.Screen name="home/offer" component={OfferScreen} />
    </Stack.Navigator>
  );
};

export default StackScreen;
