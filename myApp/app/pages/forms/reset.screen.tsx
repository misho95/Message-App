import {StyleSheet, Text, View} from 'react-native';
import FormInputs from '../../components/forms/forms.input';
import FormsContainer from '../../components/forms/forms.container';
import PinkButton from '../../components/forms/pink.button';
import FormsRadio from '../../components/forms/forms.radion';
import FormsRadioGroup from '../../components/forms/forms.radio.group';
import {useState} from 'react';

type PropsType = {
  navigation: any;
};

const ResetScreen = ({navigation}: PropsType) => {
  const [type, setType] = useState('email');

  return (
    <>
      <FormsContainer
        navigation={navigation}
        title={'პაროლის აღდგენა'}
        height={{minHeight: 595, maxHeight: 645}}>
        <View style={styles.container}>
          {/* inputs */}
          <View style={{paddingVertical: 15, flex: 1, gap: 15}}>
            <FormsRadioGroup defVal={type} onChange={setType}>
              <FormsRadio title={'იმეილით'} value={'email'} />
              <FormsRadio title={'მობილურის ნომრით'} value={'mobile'} />
            </FormsRadioGroup>
            {type === 'email' ? (
              <FormInputs secured={false} placeholder={'ელ-ფოსტა'} />
            ) : (
              <FormInputs secured={false} placeholder={'მობილურის ნომერი'} />
            )}
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

export default ResetScreen;
