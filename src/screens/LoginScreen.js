import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Input from '../components/input';
import TextComponent from '../components/text';
import ButtonComponent from '../components/button';
import CheckBoxComponent from '../components/checkbox';

const LoginScreen = ({navigation}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSıgnIn  = () => {
        if((username == 'a' || username == 'A') && (password == 'a' || password == 'A')){
            navigation.navigate('Home')
        }
        console.log(username);
        console.log(password);
    }

    return (
        <View style={styles.loginBox}>
            <TextComponent style={styles.loginText}>LOGIN</TextComponent>
            <Input id="username" name="username" autoComplete="off" autoFocus value={username} onChangeText={username => setUsername(username)} placeholder="Username"/>
            <Input id="password" type="password" name="password" autoComplete="off" value={password} onChangeText={password => setPassword(password)} placeholder="Password"/>
            <View style={styles.checkboxRow}>
                <CheckBoxComponent style={styles.checkBoxLabel}/>
                <TextComponent>Remember</TextComponent>
                <ButtonComponent onPress={() =>handleSıgnIn()} style={styles.loginButton}>Sign In</ButtonComponent>
            </View>
            <View style={styles.alternativeLogin}>
                <ButtonComponent style={styles.alternativeButtonFacebook}>f Sign In with</ButtonComponent>
                <ButtonComponent style={styles.alternativeButtonGoogle}>G Sign In with</ButtonComponent>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    checkboxRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },

    checkBoxLabel: {
        marginLeft: 20
    },

    alternativeLogin: {
        display: 'flex',
    },

    alternativeButtonFacebook: {
        width: 200,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#3a5898',
        color: '#fff',
        borderRadius: 5,
        fontSize: 16
    },

    alternativeButtonGoogle: {
        width: 200,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: '#2196f3',
        color: '#fff',
        borderRadius: 5,
        fontSize: 16
    },

    loginText: {
        fontSize: 30,
        alignSelf: 'center', 
    },

    loginInput: {
        alignSelf: 'center',
        borderRadius: 5,
    },

    loginButton: {
        width: 100,
        alignSelf: 'flex-end',
        marginRight: 20,
        marginLeft: 'auto',
        backgroundColor: '#424242',
        color:'#ffffff',
        justifyContent: 'center',
        borderRadius: 5
    },

    loginBox: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'silver',
        marginRight: 22,
        marginLeft: 22,
        marginTop: 42,
    },
   
})

export default LoginScreen;