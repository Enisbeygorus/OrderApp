import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import axios from '../api/api';

import Order from '../components/Order/Order';

const OrdersScreen = () => {
    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false)

    const searchApi = async () => {
        // const response = await axios.get()
        axios.get().then(response => {
            setOrders(response.data);
            setLoaded(true);
        }).catch(e => setLoaded(true))
    }
    useEffect(() => {
        searchApi()
        console.log('mount it!');
        
    }, []);


  return (
    <View style={styles.ordersScreen}>
      <Text style={styles.header}>My Orders</Text>
      <Text style={styles.subHeader}>{orders.length} of Orders Found</Text>
        {
            loaded ? <FlatList 
            keyExtractor = {item => `${item['id']}`}
            data={orders}
            renderItem={({item}) => {
                return <Order data={item} />
            }}/> 
            : <View style={styles.spinner}><ActivityIndicator size="large" color="blue" /></View> 

        }

      
    </View>
  )
};

const styles = StyleSheet.create({
    ordersScreen: {
        fontSize: 30,
        height: '100%',
        width: '100%'
    },

    header: {
        fontSize: 20,
        alignSelf: 'center',
        marginVertical: 10,
        color: 'blue',
        fontWeight: 'bold'
    },

    subHeader: {
        fontSize: 18,
        alignSelf: 'center',
        marginBottom: 10,
        color: '#000',
        fontWeight: 'bold'
    },

    spinner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'

    }
});

export default OrdersScreen;