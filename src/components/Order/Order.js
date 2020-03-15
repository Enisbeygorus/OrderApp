import React from "react";
import {View, Text, StyleSheet } from "react-native";

import OrderRow from './OrderRow';

const order = ({data}) => {
    console.log(data);
  return (
    <View style={styles.order}>
      <OrderRow 
        title="Order number"
        value={data['id']}
      />

    <OrderRow 
        title="Order status"
        value={'true'}
      />
    
    <OrderRow 
        title="Date Placed"
        value={data['title']}
      />

    <OrderRow 
        title="Total"
        value={data['userId']}
      />


    </View>
  )
};

const styles = StyleSheet.create({
  order: {
      backgroundColor: 'rgba(0 ,0 ,0 , 0.1)',
      borderBottomWidth: 1,
      borderTopWidth: 1
  }
});

export default order;