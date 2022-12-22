import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import ListItem from '../components/ListItem';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/image/avatar.jpg'),
    },
    {
      id: '2',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/image/img_profile.jpg'),
    },
    {
      id: '3',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/image/avatar.jpg'),
    },
    {
      id: '4',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/image/img_profile.jpg'),
    },
    {
      id: '5',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/image/avatar.jpg'),
    },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_title}>
          <Text style={styles.heading}>Friends</Text>
          <Icons name="home" size={32} color="red" style={styles.icon} />
        </View>
        <View style={styles.header_button}>
          <View>
            <Button title="Suggestions" style={styles.buttonRadius} />
          </View>
          <View style={styles.block_button}>
            <Button title="Your Friends" style={styles.buttonRadius} />
          </View>
        </View>
      </View>
      <View style={styles.body_title}>
        <Text style={styles.heading_small}>Friend Requests</Text>
        <TouchableOpacity>
          <Text style={styles.heading_smaller}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.body}
        data={data}
        refreshing={loading}
        keyExtractor={(item, index) => item.id + index.toString()}
        renderItem={itemData => {
          return (
            <ListItem
              id={itemData.item.id}
              name={itemData.item.name}
              img={itemData.item.img}
              week={itemData.item.week}
              followers={itemData.item.followers}
            />
          );
        }}
        alwaysBounceVertical={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flex: 0.16,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  body: {
    flex: 1,
  },
  header_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  header_button: {
    flexDirection: 'row',
  },
  block_button: {
    marginLeft: 10,
  },
  buttonRadius: {
    borderWidth: 1,
    borderRadius: 50,
  },
  body_title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 
  },
  heading_small: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  heading_smaller: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'blue',
  },
});
