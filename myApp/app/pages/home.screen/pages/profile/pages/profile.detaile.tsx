import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AppContainer from '../../../../../components/app.container';
import {useTheme} from '../../../../../utils/global.store';
import ProfileInput from '../../../../../components/profile/profile.input';
import PinkButton from '../../../../../components/shared/pink.button';
import DarkButton from '../../../../../components/shared/dark.button';

const ProfileDetaileScreen = ({navigation}) => {
  const {theme} = useTheme();

  const renderInputs = [
    {
      title: 'სახელი',
      value: 'მანანა',
    },
    {
      title: 'გვარი',
      value: 'რუსიტაშვილი',
    },
    {
      title: 'მეილი',
      value: 'rusitashvilimanana@gmail.com',
    },
    {
      title: 'მობილურის ნომერი',
      value: '598887766',
    },
  ];

  return (
    <AppContainer navigation={navigation}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          gap: 10,
          paddingBottom: 10,
        }}>
        <View style={styles.container}>
          <Text style={theme === 'light' ? styles.title : styles.titleDark}>
            პროფილი
          </Text>
          <ScrollView style={{height: '100%'}}>
            <View
              style={{
                flexDirection: 'column',
                gap: 3,
                alignItems: 'flex-start',
                width: '100%',
              }}>
              {renderInputs.map(r => {
                return (
                  <ProfileInput title={r.title} value={r.value} edit={false} />
                );
              })}
              <DarkButton title={'პაროლის აღდგენა'} />
            </View>
          </ScrollView>
        </View>
        <PinkButton
          title="პროფილის რედაქტირება"
          handler={() => navigation.navigate('profile/edit')}
        />
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
  },
  titleDark: {
    fontSize: 20,
    lineHeight: 24,
    color: '#fff',
  },
});

export default ProfileDetaileScreen;
