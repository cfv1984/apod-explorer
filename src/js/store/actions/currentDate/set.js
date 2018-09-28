import {createAction} from "redux-actions";

export default createAction('CURRENT_DATE/set', (year,month,day) => ({year,month,day}));