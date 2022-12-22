import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

export default function ListItem() {
  return (
    <>
      <Image style={styles.img} />
      <View style={styles.descriptions}>
        <Text style={styles.img}>Name</Text>
        <Text style={styles.img}>Followed by</Text>
        <View style={styles.img}>
          <Button style={styles.img} title="confirm" />
          <Button style={styles.img} title="Delete" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
