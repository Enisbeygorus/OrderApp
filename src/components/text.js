import React from 'react';
import { Text , StyleSheet } from 'react-native';



const TextComponent = (props) => {
    const {style, ...rest } = props;
    return <Text style={[styles.input, style]} {...rest}> {props.children}</Text>
};

const styles = StyleSheet.create({
    input: {
    }
  });
  

export default TextComponent