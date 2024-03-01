import {StyleSheet, Text} from 'react-native';
import AppContainer from '../../../../../components/app.container';
import {useTheme} from '../../../../../utils/global.store';

const ProfileEditScreen = ({navigation}) => {
  const {theme} = useTheme();

  return (
    <AppContainer navigation={navigation}>
      <Text>Edit</Text>
    </AppContainer>
  );
};

const styles = StyleSheet.create({});

export default ProfileEditScreen;
