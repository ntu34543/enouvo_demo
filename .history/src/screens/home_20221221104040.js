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
  Button
} from 'react-native';
import {Button} from 'react-native';

export default function Home() {
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
        <View style={styles.header_title}>
          <Text style={styles.heading}>Friends</Text>
          <Text>Friends</Text>
        </View>
        <View style={styles.header_button}>
          <Button title="Suggestions" />
          <Button title="Your Friends" />
        </View>
      </View>
      <FileList style={styles.body} />
    </SafeAreaView>
  );
}

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
  header_title: {},
  header_button: {},
});
