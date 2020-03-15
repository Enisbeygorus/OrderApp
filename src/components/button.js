import React from 'react';
import { TouchableOpacity, Text , View, StyleSheet } from 'react-native';

const ButtonComponent = (props) => {
    const {style, ...rest } = props;
    return (<View style={style}>
                <TouchableOpacity style={styles.buttonStyle} {...rest}>
                    <Text style={{color: style.color, alignSelf: 'center', padding: 5, fontSize: style.fontSize}}>
                        {props.children}
                    </Text>
                </TouchableOpacity>
            </View>
    ) 
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ccc',
    }
  });

export default ButtonComponent;