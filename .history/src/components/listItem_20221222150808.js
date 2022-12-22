import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function ListItem(props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startDeleteHandler = () => {
    setModalIsVisible(true);
  };

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
          <TouchableOpacity style={styles.btn_confirm}>
            <Text style={styles.text_btn}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn_delete}
            onPress={startDeleteHandler}>
            <Text style={styles.text_btn}>Delete</Text>
          </TouchableOpacity>
        </View>
        <Modal transparent animationType="slide" hardwareAccelerated>
          <View style={styles.centered_view}>
            <View style={styles.warning_modal}>
              <View style={styles.warning_title}>
                <Text>WARNING!</Text>
              </View>
              <View style={styles.warning_body}>
                <Text style={styles.text}>
                  Do you want to remove this
                </Text>
              </View>
              <Pressable
                onPress={() => setShowWarning(false)}
                style={styles.warning_button}
                android_ripple={{color: 'black'}}>
                <Text style={styles.text}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
    // justifyContent: "space-between",
  },
  block_left: {
    width: '30%',
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  block_right: {
    // paddingTop: 50,
    // width: 200,
    width: '70%',
    // marginLeft: 15,
  },
  followers: {
    paddingTop: 7,
    paddingBottom: 7,
  },
  block_right_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn_confirm: {
    backgroundColor: '#0080FF',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 10,
  },
  btn_delete: {
    marginLeft: 10,
    backgroundColor: '#0080FF',
    paddingVertical: 10,
    paddingHorizontal: 38,
    borderRadius: 10,
  },
  text_btn: {
    color: 'white',
    fontSize: 15,
  },
});
