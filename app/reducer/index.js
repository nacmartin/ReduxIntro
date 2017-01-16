export default reducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case 'DUPLICATE':
            return {
                ...state,
                counter: state.counter * 2
            };
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
}
