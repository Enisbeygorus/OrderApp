import React from 'react';
import { CheckBox  } from 'react-native';

const CheckBoxComponent = (props) => {
    const {style, ...rest } = props;
    return <CheckBox style={style} {...rest}/>
};

export default CheckBoxComponent