import {StyleSheet, Text, View} from 'react-native';
import ProfileAvatar from './profile.avatar';

const ProfileAccount = () => {
  return (
    <View style={styles.center}>
      <View style={styles.container}>
        <ProfileAvatar
          width={128}
          height={128}
          url="../../assets/imgs/Avatar.png"
        />
        <Text style={styles.textName}>მანანა რუსიტაშვილი</Text>
        <Text style={styles.textLevel}>პირველი დონე</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '98%',
    paddingHorizontal: 24,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 16,
    shadowOffset: {width: 0, height: 1},
    shadowColor: '919EAB',
    shadowOpacity: 0.08,
    shadowRadius: 2,
    backgroundColor: '#fff',
  },
  textName: {
    color: '#212B36',
    fontSize: 16,
    lineHeight: 24,
  },
  textLevel: {
    color: '#919EAB',
    fontSize: 14,
    lineHeight: 22,
  },
});

export default ProfileAccount;
