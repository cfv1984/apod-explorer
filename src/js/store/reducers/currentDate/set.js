import {toString} from "../../../utils/date";

export const initialState = "";

export default (state, {payload}) => ({
    ...state,
    currentDate: toString(Object.values(payload))
});
