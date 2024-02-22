import {SafeAreaView, Text, View} from 'react-native';
import AppContainer from '../../../components/app.container';

const HomeScreen = ({navigation}) => {
  return (
    <AppContainer navigation={navigation}>
      <Text>Home Screen</Text>
    </AppContainer>
  );
};

export default HomeScreen;
