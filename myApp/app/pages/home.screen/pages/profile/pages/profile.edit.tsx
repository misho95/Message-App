import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import AppContainer from '../../../../../components/app.container';
import {useTheme} from '../../../../../utils/global.store';
import ProfileInput from '../../../../../components/profile/profile.input';
import {useState} from 'react';
import PinkButton from '../../../../../components/shared/pink.button';
import ProfileEditAvatar from './profile.edit.avatar';

const ProfileEditScreen = ({navigation}) => {
  const {theme} = useTheme();

  const [firstName, setFirstName] = useState('მანანა');
  const [lastName, setLastName] = useState('რუსიტაშვილი');
  const [email, setEmail] = useState('rusitashvilimanana@gmail.com');
  const [mobile, setMobile] = useState('598887766');

  const renderInputs = [
    {
      title: 'სახელი',
      value: firstName,
      set: setFirstName,
    },
    {
      title: 'გვარი',
      value: lastName,
      set: setLastName,
    },
    {
      title: 'მეილი',
      value: email,
      set: setEmail,
    },
    {
      title: 'მობილურის ნომერი',
      value: mobile,
      set: setMobile,
    },
  ];

  return (
    <AppContainer navigation={navigation}>
      <View style={{flex: 1, justifyContent: 'space-between', gap: 10}}>
        <View style={styles.container}>
          <Text style={theme === 'light' ? styles.title : styles.titleDark}>
            პროფილი
          </Text>
          <ProfileEditAvatar />
          <ScrollView>
            {renderInputs.map(i => {
              return (
                <ProfileInput
                  title={i.title}
                  value={i.value}
                  set={i.set}
                  edit={true}
                />
              );
            })}
          </ScrollView>
        </View>
        <PinkButton title="შენახვა" handler={() => {}} />
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

export default ProfileEditScreen;
