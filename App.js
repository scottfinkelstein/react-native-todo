import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { FlatList, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Home from './screens/Home';
import { store } from './redux/store';

export default function App() {


  return (
    <Provider store={ store }>
      <Home />
    </Provider>
  );
}

