import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import styles from './../styles';
import Button from './Button';
import { connect } from 'react-redux'

const Counter = (props) => {

    return (
        <View style={styles.counter}>
            <Text style={styles.counterValue}>
                {props.counter}
            </Text>
            <Button
                backgroundColor={'#496943'}
                onPress={props.dispatch.bind(this, {type: 'INCREMENT'})}
                title="Increment"
            />
            <Button
                backgroundColor={'#6b4644'}
                onPress={props.dispatch.bind(this, {type: 'DECREMENT'})}
                title="Decrement"
            />
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
};

export default connect(mapStateToProps)(Counter);
