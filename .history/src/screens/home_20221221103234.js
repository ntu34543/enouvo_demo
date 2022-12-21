import React, {useRef, useState} from 'react';
import {Button} from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Home = () => {
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/image/img_profile.jpg'),
    },
    {
      id: '2',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/image/img_profile.jpg'),
    },
    {
      id: '3',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/image/img_profile.jpg'),
    },
    {
      id: '4',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/image/img_profile.jpg'),
    },
    {
      id: '5',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/image/img_profile.jpg'),
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_tit}>
          <h1>Friends</h1>
          <h1>Friends</h1>
        </View>
        <View style={styles.header}>
          <Button title="Suggestions" />
          <Button title="Your Friends" />
        </View>
      </View>
      <View style={styles.body}>
        <Text>body</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
});

export default Home;
