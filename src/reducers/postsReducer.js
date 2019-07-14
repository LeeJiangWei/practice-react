export default (state = [], action) => {
    // remember don't modify state argument
    // redux thunk will compare returned state with original one using '==='
    // so if you modify the original one and return it, it refers to same address in memory, thus thunk will regard it as unchanged
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
}