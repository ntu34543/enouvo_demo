import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

export default function ListItem() {
  return (
    <View style={styles.}>
      <View style={styles.block_left}>
        <Image style={styles.img} />
      </View>
      <View style={styles.block_right}>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.followers}>Followed by</Text>
        <View style={styles.btn}>
          <Button style={styles.btn_confirm} title="Confirm" />
          <Button style={styles.btn_delete} title="Delete" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
