import React, {useRef, useState} from 'react';
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

const home = () => {
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
    <SafeAreaView>
      <View>
        <Text>asfsf</Text>
      </View>
      <View></View>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({});
