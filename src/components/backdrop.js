import React from 'react';

import { View, StyleSheet, Platform } from 'react-native';
import Modal from 'react-native-modalbox';


const backdrop = (props) => (<Modal 
    style={styles.backdrop}
    backdrop={true}
    onClosed={()=> {
        alert('Modal closed')
    }}
    ></Modal>);

const styles = StyleSheet.create({
    backdrop: {
        justifyContent: 'center',
        borderRadius: Platform.OS === 'ios' ? 30 : 0,
        shadowRadius: 10,
        width: 300,
        height: 200
    }
  });

export default backdrop;