import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FormInputs from '../../components/forms/forms.input';
import FormsContainer from '../../components/forms/forms.container';
import PinkButton from '../../components/forms/pink.button';

const LoginScreen = ({navigation}) => {
  return (
    <>
      <FormsContainer navigation={navigation} title={'შესვლა'}>
        <View style={styles.container}>
          {/* inputs */}
          <View style={{paddingVertical: 15, flex: 1, gap: 15}}>
            <FormInputs secured={false} placeholder={'Email'} />
            <FormInputs secured={true} placeholder={'********'} />
          </View>
          {/*  bottom */}
          <View style={styles.flexRow}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 6}}>
              <Text style={{color: '#999999'}}>დამახსოვრება</Text>
            </View>
            <Text
              style={{color: '#999999'}}
              onPress={() => navigation.navigate('Reset')}>
              დაგავიწყდა პაროლი?
            </Text>
          </View>
          <PinkButton />
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              width: 180,
              alignSelf: 'center',
            }}>
            ახალი ხარ KidNest Loyal-ში?{' '}
            <Text
              style={{color: '#B244A2'}}
              onPress={() => {
                navigation.navigate('Registration');
              }}>
              დარეგისტრირდი
            </Text>{' '}
            ახლავე.
          </Text>
        </View>
      </FormsContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LoginScreen;
