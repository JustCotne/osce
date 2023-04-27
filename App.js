import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Navigation from './src/components/Navigation';
import { Provider } from './src/context/globalContext';


const App = () => {
  return (
    <Provider>
      <Navigation/>
    </Provider>
  );
}

export default App

const styles = StyleSheet.create({})