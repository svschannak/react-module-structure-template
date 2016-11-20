const Reducer = (state = {}, action) => {
    switch (action.type) {
        case 'INIT':
            return Object.assign({}, state, {
                init: true
            });

        default:
            return state
    }
}

export default Reducer;
