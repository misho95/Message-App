import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import FormInputs from '../../components/forms/forms.input';
import FormsContainer from '../../components/forms/forms.container';
import PinkButton from '../../components/forms/pink.button';
import FormsRadio from '../../components/forms/forms.radion';
import FormsRadioGroup from '../../components/forms/forms.radio.group';
import {useState} from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

type PropsType = {
  navigation: any;
};

const CELL_COUNT = 6;

const ResetScreen = ({navigation}: PropsType) => {
  const [type, setType] = useState('email');
  const [credentials, setCredentials] = useState('');
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

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
              <View style={styles.relativeView}>
                <FormInputs
                  value={credentials}
                  onChange={text => setCredentials(text)}
                  placeholder={'ელ-ფოსტა'}
                />
                {credentials && (
                  <Pressable style={styles.absoluteButton}>
                    <Text>Send</Text>
                  </Pressable>
                )}
              </View>
            ) : (
              <FormInputs placeholder={'მობილურის ნომერი'} />
            )}
            {/*  */}
            <CodeField
              ref={ref}
              {...props}
              // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
            {/*  */}
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
  relativeView: {
    position: 'relative',
  },
  absoluteButton: {
    position: 'absolute',
    right: 5,
    top: 6,
    backgroundColor: '#FDC8F5',
    color: '#1C1A1B',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 9,
  },
  codeFieldRoot: {marginTop: 0},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#8B8B8B33',
    color: '#8B8B8B',
    textAlign: 'center',
    borderRadius: 8,
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default ResetScreen;
