import {SafeAreaView, Text, View} from 'react-native';
import AppContainer from '../../../components/app.container';
import AppHeader from '../../../components/shared/header';

const HomeScreen = ({navigation}) => {
  return (
    <AppContainer navigation={navigation}>
      <Text>Home Page</Text>
    </AppContainer>
  );
};

export default HomeScreen;
