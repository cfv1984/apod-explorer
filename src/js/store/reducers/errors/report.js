export default (state, {payload}) => ({
    ...state,
    errors: [
        ...state.errors,
        payload
    ]
});
