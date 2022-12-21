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

export default function Home() {
  
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
