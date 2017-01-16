import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import styles from './../styles';
import Button from './Button';
import { connect } from 'react-redux'

const Multiplier = (props) => {

    return (
        <View style={styles.multiplier}>
            <Text style={styles.counterValue}>
                {props.counter}
            </Text>
            <Button
                backgroundColor={'#406565'}
                onPress={props.dispatch.bind(this, {type: 'DUPLICATE'})}
                title="Duplicate"
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
};

export default connect(mapStateToProps)(Multiplier);
