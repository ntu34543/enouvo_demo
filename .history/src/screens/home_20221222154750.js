import React, {useState, useCallback} from 'react';
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
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Pressable,
  Linking,
  Alert,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import ListItem from '../components/ListItem';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([
    {
      id: '1',
      name: 'Naa Nii',
      followers: 'Followed by 15k',
      week: '47w',
      img: require('../assets/image/avatar.jpg'),
    },
    {
      id: '2',
      name: 'Naa Nii',
      followers: '',
      week: '47w',
      img: require('../assets/image/img_profile.jpg'),
    },
    {
      id: '3',
      name: 'Naa Nii',
      followers: '',
      week: '47w',
      img: require('../assets/image/avatar.jpg'),
    },
    {
      id: '4',
      name: 'Naa Nii',
      followers: '',
      week: '47w',
      img: require('../assets/image/img_profile.jpg'),
    },
    {
      id: '5',
      name: 'Naa Nii',
      followers: '',
      week: '47w',
      img: require('../assets/image/avatar.jpg'),
    },
    {
      id: '6',
      name: 'Naa Nii',
      followers: '',
      week: '47w',
      img: require('../assets/image/img_profile.jpg'),
    },
    {
      id: '7',
      name: 'Naa Nii',
      followers: '',
      week: '47w',
      img: require('../assets/image/avatar.jpg'),
    },
  ]);

  const handleDelete = () => {
    
  }

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

  // const supportedURL = 'https://google.com';

  // const unsupportedURL = 'slack://open?team=123456';

  // const OpenURLButton = ({url, children}) => {
  //   const handlePress = useCallback(async () => {
  //     // Checking if the link is supported for links with custom URL scheme.
  //     const supported = await Linking.canOpenURL(url);

  //     if (supported) {
  //       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
  //       // by some browser in the mobile
  //       await Linking.openURL(url);
  //     } else {
  //       Alert.alert(`Don't know how to open this URL: ${url}`);
  //     }
  //   }, [url]);

  //   return <Button title={children} onPress={handlePress} />;
  // };
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
            onDelete={handleDelete}
          />
        );
      }}
      contentContainerStyle={[
        {
          flexGrow: 1,
          justifyContent: 'center',
        },
      ]}
      ListHeaderComponent={ListHeader}
      ListEmptyComponent={EmptyRender}
      alwaysBounceVertical={false}
    />

    // <KeyboardAvoidingView
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={styles.container}>
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //     <View style={styles.inner}>
    //       <Text style={styles.header}>Header</Text>
    //       <TextInput placeholder="Username" style={styles.textInput} />
    //       <View style={styles.btnContainer}>
    //         <TouchableOpacity style={styles.button} onPress={() => null}>
    //           <Text style={styles.text}>Submit</Text>
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>

    // <View style={styles.container}>
    //   <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
    //   <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
    // </View>
  );
}

const styles = StyleSheet.create({
  // 0
  // container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  // 1
  // container: {
  //   flex: 1,
  // },
  // inner: {
  //   padding: 24,
  //   flex: 1,
  //   justifyContent: 'center',
  // },
  // header: {
  //   fontSize: 36,
  //   marginBottom: 48,
  // },
  // textInput: {
  //   height: 40,
  //   borderColor: '#000000',
  //   borderBottomWidth: 1,
  //   marginBottom: 36,
  // },
  // btnContainer: {
  //   backgroundColor: 'white',
  //   marginTop: 12,
  // },
  // button: {
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingVertical: 12,
  //   paddingHorizontal: 32,
  //   elevation: 3,
  //   backgroundColor: 'black',
  //   borderRadius: 50,
  // },
  // text: {
  //   fontSize: 16,
  //   lineHeight: 21,
  //   fontWeight: 'bold',
  //   letterSpacing: 0.25,
  //   color: 'white',
  // },
  // 2
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
    alignItems: 'center',
    textAlign: 'center',
  },
  emptytext: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
});
