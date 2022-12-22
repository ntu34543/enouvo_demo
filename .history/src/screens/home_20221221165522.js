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
  const [data, setData] = useState([]);
  const ListHeader = () => {
    return (
      <>
        <View style={styles.header}>
          <View style={styles.header_title}>
            <Text style={styles.heading}>Friends</Text>
            <Icons name="home" size={32} color="red" style={styles.icon} />
          </View>
          <View style={styles.header_button}>
            <View>
              <Button title="Suggestions" />
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
      </>
    );
  };
  const EmptyRender = () => {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptytext}>Khong co du lieu</Text>
      </View>
    );
  };
  return (
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
      ListHeaderComponent={ListHeader}
      ListEmptyComponent={EmptyRender}
      alwaysBounceVertical={false}
    />
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
    paddingBottom: 10,
  },
  body: {
    flex: 1,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#FFFFFF',
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  emptytext: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
});
