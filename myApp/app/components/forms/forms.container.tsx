import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AppHeader from '../shared/header';
import {ReactNode} from 'react';

type PropsType = {
  children: ReactNode;
  navigation: any;
  title: string;
};

const FormsContainer = ({children, navigation, title}: PropsType) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../../assets/imgs/bg-form.png')}
            resizeMode="cover"
            style={styles.background}>
            <SafeAreaView style={styles.container}>
              <AppHeader navigation={navigation} />
              {/* back button */}

              <View style={styles.center}>
                <View style={styles.form}>
                  <View style={{gap: 20}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Image
                        source={require('../../assets/imgs/arrow-left.png')}
                      />
                    </TouchableOpacity>
                    {/* title */}
                    <Text style={styles.title}>{title}</Text>
                  </View>
                  <>{children}</>
                </View>
              </View>
            </SafeAreaView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    height: 505,
    backgroundColor: '#F8F8F8',
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 40,
    flexDirection: 'column',
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
  },
});

export default FormsContainer;
