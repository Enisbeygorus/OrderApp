import React from 'react';
import { TextInput , StyleSheet } from 'react-native';

const Input = (props) => {
    const {style, ...rest } = props;
    return <TextInput
        style={[styles.input, style]}
        {...rest}
    />
};

const styles = StyleSheet.create({
    input: {
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#333',
      width: '60%',
      marginVertical: 20,
      alignSelf: 'center',
      paddingLeft: 6,
      borderRadius: 5
    }
  });
  

export default Input