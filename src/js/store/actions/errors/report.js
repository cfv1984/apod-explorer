import { createAction } from "redux-actions";

export default createAction("ERRORS/report", ({message,timestamp}) => ({message,timestamp}));
