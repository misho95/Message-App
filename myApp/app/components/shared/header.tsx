import {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Modal,
  FlatList,
  Text,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import i18n, {languageResources} from '../../../lang-service/i18n';
import {changeLanguage} from 'i18next';
import {useLang} from '../../utils/global.store';

const AppHeader = ({navigation}) => {
  const auth = true;
  const {lang, changeLang} = useLang();
  const [openModal, setOpenModal] = useState(false);
  const changeLng = lng => {
    i18n.changeLanguage(lng);
    changeLang(lng);
    setOpenModal(false);
  };

  return (
    <View style={styles.header}>
      <Modal visible={openModal} onRequestClose={() => setOpenModal(false)}>
        <ImageBackground
          source={require('../../assets/imgs/bg-form.png')}
          resizeMode="cover"
          style={styles.background}>
          <SafeAreaView style={styles.languageList}>
            <FlatList
              style={styles.langFlatList}
              data={Object.keys(languageResources)}
              renderItem={({item}) => (
                <Pressable
                  style={styles.lngList}
                  onPress={() => changeLng(item)}>
                  <Text style={styles.lngText}>{item.toUpperCase()}</Text>
                </Pressable>
              )}
            />
          </SafeAreaView>
        </ImageBackground>
      </Modal>
      <Pressable
        onPress={() => navigation.navigate(auth ? 'მთავარი' : 'login')}>
        <Image
          source={require('../../assets/imgs/logo.header.png')}
          style={{width: 130, height: 42}}
        />
      </Pressable>
      {lang === 'ge' ? (
        <Pressable onPress={() => setOpenModal(true)}>
          <Image
            source={require('../../assets/imgs/ge-flag.png')}
            style={{width: 33, height: 22}}
          />
        </Pressable>
      ) : (
        <Pressable onPress={() => setOpenModal(true)}>
          <Image
            source={require('../../assets/imgs/en-flag.png')}
            style={{width: 33, height: 22}}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  background: {
    flex: 1,
  },
  languageList: {
    flex: 1,
  },
  langFlatList: {
    flex: 1,
    padding: 20,
  },
  lngList: {
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  lngText: {
    padding: 10,
    color: 'black',
  },
});

export default AppHeader;
