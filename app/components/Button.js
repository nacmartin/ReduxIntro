import React, { Component } from 'react';
import {Text, TouchableOpacity} from 'react-native';

export default props => {
    return(
        <TouchableOpacity
            style={{
                backgroundColor: props.backgroundColor || '#fff',
                borderRadius: 5,
                padding: 10,
                paddingLeft: 20,
                paddingRight: 20,
                margin: 5,

            }}
            onPress={props.onPress}
        >
            <Text style={{color: 'white'}}>{props.title}</Text>
        </TouchableOpacity>
    );
}
