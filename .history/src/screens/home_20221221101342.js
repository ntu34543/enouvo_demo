import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const home = () => {
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/img/AccucheckActiveTestStrip.png'),
    },
    {
      id: '2',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/img/AccucheckActiveTestStrip.png'),
    },
    {
      id: '3',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/img/AccucheckActiveTestStrip.png'),
    },
    {
      id: '4',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/img/AccucheckActiveTestStrip.png'),
    },
    {
      id: '5',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/img/AccucheckActiveTestStrip.png'),
    },
  ]);
  return (
    <SafeAreaView>
      <View></View>
      <View></View>
    </SafeAreaView>
  );
};

export default home;

const styles = StyleSheet.create({});
