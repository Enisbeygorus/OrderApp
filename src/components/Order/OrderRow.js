import React from "react";
import {View, Text, StyleSheet } from "react-native";

const orderRow = (props) => {

  return (
    <View style={styles.orderRow}>
        <Text style={styles.leftText}>{props.title}</Text>
        <Text style={styles.rightText}>{props.value}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  orderRow: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
  },

  leftText: {
    alignSelf: 'center',
    width: '40%',
    marginLeft: 50
  },

  rightText: {
      flexWrap: 'wrap',
      flexDirection: 'column',
      flex: 1
  }
});

export default orderRow;