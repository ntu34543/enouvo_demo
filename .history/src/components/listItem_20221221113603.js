import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

export default function ListItem() {
  return (
    <View>
      <Image />
      <View>
        <Text>Name</Text>
        <Text>Followed by</Text>
        <View>
            <Button />
            <Button />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
