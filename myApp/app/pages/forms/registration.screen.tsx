import {StyleSheet, Text, View} from 'react-native';
import FormInputs from '../../components/forms/forms.input';
import FormsContainer from '../../components/forms/forms.container';
import PinkButton from '../../components/forms/pink.button';

type PropsType = {
  navigation: any;
};

const RegistrationScreen = ({navigation}: PropsType) => {
  return (
    <>
      <FormsContainer
        navigation={navigation}
        title={'რეგისტრაცია'}
        height={{minHeight: 525, maxHeight: 575}}>
        <View style={styles.container}>
          {/* inputs */}
          <View style={{paddingVertical: 15, flex: 1, gap: 15}}>
            <FormInputs secured={false} placeholder={'ელ-ფოსტა'} />
            <FormInputs secured={true} placeholder={'პაროლი'} />
            <FormInputs secured={true} placeholder={'გაიმეორე პაროლი'} />
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
          <PinkButton title="შესვლა" />
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              width: '80%',
              alignSelf: 'center',
            }}>
            უკვე გაქვთ ანგარიში KidNest Loyal-ში? გაიარე
            <Text
              style={{color: '#B244A2'}}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              {' '}
              ავტორიზაცია
            </Text>
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

export default RegistrationScreen;
