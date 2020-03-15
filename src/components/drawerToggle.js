import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';


const drawerToggle = (props) => (
    <TouchableOpacity style={styles.drawerToggle}  onClick={props.clicked}>
        <View style={styles.drawerToggleText}></View>
        <View style={styles.drawerToggleText}></View>
        <View style={styles.drawerToggleText}></View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    drawerToggle: {
        width: 40,
        marginLeft: '5%',
        marginTop: '5%'
    },

    drawerToggleText: {
        width: '90%',
        height: 3,
        backgroundColor: '#000',
        marginVertical: 3,
    }
  });

export default drawerToggle;