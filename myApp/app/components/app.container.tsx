import {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppHeader from './shared/header';

type PropsType = {
  children: ReactNode;
  navigation: any;
};

const AppContainer = ({children, navigation}: PropsType) => {
  return (
    <SafeAreaView style={styles.safeContent}>
      <AppHeader navigation={navigation} />
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContent: {
    flex: 1,
    gap: 25,
  },
  content: {
    flex: 1,
  },
});

export default AppContainer;
