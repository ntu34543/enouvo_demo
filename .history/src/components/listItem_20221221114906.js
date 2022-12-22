import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

export default function ListItem(props) {
  return (
    <View style={styles.blocks}>
      <View style={styles.block_left}>
        <Image style={styles.img} source=/>
      </View>
      <View style={styles.block_right}>
        <View>
          <Text style={styles.name}>Name</Text>
          <Text style={styles.week}>week</Text>
        </View>
        <Text style={styles.followers}>Followed by</Text>
        <View style={styles.btn}>
          <Button style={styles.btn_confirm} title="Confirm" />
          <Button style={styles.btn_delete} title="Delete" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blocks: {
    flexDirection: 'row',
  },
  btn: {
    flexDirection: 'row',
  },
});
