import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

export default function ListItem() {
  return (
    <>
      <Image style={styles.img}/>
      <View style={styles.img}>
        <Text style={styles.img}>Name</Text>
        <Text style={styles.img}>Followed by</Text>
        <View style={styles.img}>
          <Button title="confirm" />
          <Button title="Delete" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
