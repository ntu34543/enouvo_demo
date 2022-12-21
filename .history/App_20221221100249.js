/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import {Button} from 'react-native';

const App = () => {
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Accu-check Active Test Strip',
      img: require('../assets/img/AccucheckActiveTestStrip.png'),
      price: 112,
    },
    {
      id: '2',
      name: 'Omron HEM-8712 BP Monitor',
      img: require('../assets/img/AccucheckActiveTestStrip.png'),
      price: 150,
    },
    {
      id: '3',
      name: 'Accu-check Active Test Strip',
      img: require('../assets/img/AccucheckActiveTestStrip.png'),
      price: 112,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb27ba',
      name: 'Omron HEM-8712 BP Monitor',
      img: require('../assets/img/AccucheckActiveTestStrip.png'),
      price: 150,
    },
  ]);
  return (
    <SafeAreaView>
      <View></View>
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default App;
