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
import ListItem from '../components/listItem';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Naa Nii',
      followers: '15k',
      week: '47w',
      img: require('../assets/image/img_profile.jpg'),
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
      img: require('../assets/image/img_profile.jpg'),
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
      img: require('../assets/image/img_profile.jpg'),
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
          <Button title="Suggestions" />
          <Button title="Your Friends" />
        </View>
      </View>
      <View>
        <Text>Friend Requests</Text>
        <TouchableOpacity>
          <Text>See All</Text>
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
    flex: 0.5,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  body: {
    flex: 1,
  },
  header_title: {
    flexDirection: 'column',
    justifyContent: "space-between",
  },
  header_button: {},
});
