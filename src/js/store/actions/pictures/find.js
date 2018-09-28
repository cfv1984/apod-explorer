import {createAction} from "redux-actions";

export default createAction('PICTURE/FIND', (year,month,day) => ({year,month,day}));