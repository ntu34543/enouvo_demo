import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function ListItem() {
  return (
    <View>
      <Image />
      <View>
        <Text>Name</Text>
        <Text>Followers</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
