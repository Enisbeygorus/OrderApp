import React from 'react';

import { View, StyleSheet, Text } from 'react-native';
import Backdrop from './backdrop';
import Modal from 'react-native-modal'
import ButtonComponent from './button';


const sideDrawer = (props) => {

    return (
        <View style={styles.sideContainer}>
            <ButtonComponent style={styles.closeButton}>X</ButtonComponent>
            <Text>asdadfdsfsfadsfdas</Text>
            <Text>asdadfdsfsfadsfdas</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    sideContainer: {
        width: '70%',
        height: '100%',
        backgroundColor: '#fff',
        position: 'absolute',
        zIndex: 200,
        left: 0,
        top:0,
    },
    sideDrawer: {
        width: '100%',
        maxWidth: '70%',
        height: '100%',
        position: 'absolute',
        zIndex: 200,
        left: 30,
        top:0,
        backgroundColor: '#fff'
    },
    sideButton: {
        fontSize: 16,
        color: '#ccc'
        
    },
    backdrop: {
        width: 200,
        backgroundColor: '#000'
    },
    closeButton: {
        fontSize: 25,
        width: 20,
        height: 20,
        color: '#000',
        marginBottom: 20

    }
  });

export default sideDrawer;