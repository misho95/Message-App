import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import AppContainer from '../../../components/app.container';
import {useTheme} from '../../../utils/global.store';
import FavList from '../../../components/fav/fav.list';
import {useTranslation} from 'react-i18next';

const FavScreen = ({navigation}) => {
  const {theme} = useTheme();
  const {t} = useTranslation();

  return (
    <AppContainer navigation={navigation}>
      <View style={{flexDirection: 'column', gap: 20}}>
        <View>
          <Text style={theme === 'light' ? styles.title : styles.titleDark}>
            {t('nav.favorite')}
          </Text>
        </View>
        <ScrollView style={{height: '100%'}}>
          <View style={{flexDirection: 'column', gap: 10}}>
            <FavList />
            <FavList />
            <FavList />
            <FavList />
          </View>
        </ScrollView>
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
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

export default FavScreen;
