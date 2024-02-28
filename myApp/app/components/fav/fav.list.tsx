import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useLang, useTheme} from '../../utils/global.store';
import {useTranslation} from 'react-i18next';

const FavList = () => {
  const {t} = useTranslation();
  const {lang} = useLang();
  const {theme} = useTheme();

  const data = {
    title: {
      en: 'Company Name',
      ge: 'კომპანიის სახელი',
    },
  };

  return (
    <View style={theme === 'light' ? styles.container : styles.containerDark}>
      <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
        <Image source={require('../../assets/imgs/logo.png')} />
        <View style={{flexDirection: 'column', gap: 3}}>
          <Text style={theme === 'light' ? styles.title : styles.titleDark}>
            {data.title[lang]}
          </Text>
          <Text
            style={theme === 'light' ? styles.discount : styles.discountDark}>
            20%
          </Text>
        </View>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{t('shared.delete')}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: 84,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#919EAB',
    shadowOpacity: 0.05,
    shadowRadius: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
  },
  containerDark: {
    padding: 10,
    height: 84,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 2},
    shadowColor: '#fff',
    shadowOpacity: 0.05,
    shadowRadius: 1,
    backgroundColor: '#27272a',
    borderRadius: 16,
  },
  title: {
    color: '#000',
    opacity: 0.8,
    fontSize: 16,
  },
  titleDark: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 16,
  },
  discount: {
    fontSize: 14,
    color: '#000',
  },
  discountDark: {
    fontSize: 14,
    color: '#fff',
  },
  button: {
    backgroundColor: '#F3C1C066',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  buttonText: {
    color: '#EE8886',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 24,
  },
});

export default FavList;
