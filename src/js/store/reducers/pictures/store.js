import {uniqBy} from "lodash-es";

export const initialState = {
    all          : [],
    lastRequested: undefined
};

export default (state, {payload}) => ({
    ...state,
    pictures: {
        all           : uniqBy([...state.pictures.all, payload], el => el.date),
        [payload.date]: payload
    }
});
