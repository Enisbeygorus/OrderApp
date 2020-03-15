import React from "react";
import {View, Text, StyleSheet } from "react-native";
import ButtonComponent from '../components/button';
import axios from '../api/api';


const HomeScreen = ({navigation}) => {

  const handleOrderHistory = () => {
    navigation.navigate('Orders')
  }

  return (
    <View style={styles.homeScreen}>
      <ButtonComponent onPress={() =>handleOrderHistory()} style={styles.homeItem}>Order History</ButtonComponent>
      <ButtonComponent style={styles.homeItem}>Product Lookup</ButtonComponent>
      <ButtonComponent style={styles.homeItem}>Inventory Lookup</ButtonComponent>

    </View>
  )
};

const styles = StyleSheet.create({
  homeScreen: {
    fontSize: 30,
    height: '100%',
    width: '100%'
  },

  homeItem: {
    fontSize: 24,
    color: 'blue',

  }
});

export default HomeScreen;
