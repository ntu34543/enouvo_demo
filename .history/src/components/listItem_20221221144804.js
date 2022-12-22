import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

export default function ListItem(props) {
  return (
    <View style={styles.blocks}>
      <View style={styles.block_left}>
        <Image style={styles.img} source={props.img} />
      </View>
      <View style={styles.block_right}>
        <View style={styles.block_right_title}>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.week}>{props.week}</Text>
        </View>
        <Text style={styles.followers}>{props.followers}</Text>
        <View style={styles.btn}>
          <Button style={{padding: }} title="Confirm" />
          <Button style={styles.btn_delete} title="Delete" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  blocks: {
    flexDirection: 'row',
    marginTop: 10,
  },
  btn: {
    flexDirection: 'row',
  },
  block_left: {},
  img: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  block_right: {
    // paddingTop: 50,
    // width: 200,
    marginLeft: 15,
  },
  followers: {
    paddingTop: 7,
    paddingBottom: 7,
  },
  block_right_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
