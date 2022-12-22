import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

export default function ListItem(props) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startDeleteHandler = () => {
    setModalIsVisible(true);
  };
  const endDeleteHandler = () => {
    setModalIsVisible(false);
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
        <Modal
          visible={modalIsVisible}
          transparent
          animationType="slide"
          hardwareAccelerated>
          <View style={styles.centered_view}>
            <View style={styles.warning_modal}>
              <View style={styles.warning_body}>
                <Text style={styles.textNotice}>
                  Do you want to remove this profile
                </Text>
              </View>
              <View style={styles.btn_Modal}>
                <Pressable
                  onPress={endDeleteHandler}
                  style={styles.warning_button}
                  android_ripple={{color: 'black'}}>
                  <Text style={styles.text}>Cancer</Text>
                </Pressable>
                <Text
                  style={{
                    borderRightColor: 'grey',
                    borderRightWidth: 1,
                  }}></Text>
                <Pressable
                  onPress={() => setShowWarning(false)}
                  style={styles.warning_button}
                  android_ripple={{color: 'black'}}>
                  <Text style={styles.text}>OK</Text>
                </Pressable>
              </View>
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
  // 3
  btn_Modal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'grey',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_modal: {
    width: 300,
    height: 173,
    backgroundColor: '#ffffff',
    borderColor: 'black',
    borderRadius: 20,
  },
  warning_body: {
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 45,
  },
  text: {
    color: '#5184d8',
    fontSize: 20,
  },
  textNotice: {}
});
