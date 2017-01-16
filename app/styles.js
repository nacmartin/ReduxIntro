import {
    StyleSheet,
} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        height: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderColor: 'red',
        borderWidth: 1,
    },
    multiplier: {
        borderColor: 'green',
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counter: {
        borderColor: 'blue',
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterValue: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
