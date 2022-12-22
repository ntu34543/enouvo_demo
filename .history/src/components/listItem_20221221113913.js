import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

export default function ListItem() {
  return (
    <>
      <View style={styles.block_left}>
        <Image style={styles.img} />
      </View>
      <View style={styles.block_right}>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.followed}>Followed by</Text>
        <View style={styles.img}>
          <Button style={styles.img} title="confirm" />
          <Button style={styles.img} title="Delete" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
