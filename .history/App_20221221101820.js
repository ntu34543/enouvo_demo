/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import Home from './src/screens/home';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Home />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
