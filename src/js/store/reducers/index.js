import {handleActions}                                                from "redux-actions";
import {reportError, clearErrors, setCurrentDate, storePicture}                    from "../actions";
import Pictures, {initialState as picturesInitialState}               from "./pictures/store";
import {ClearErrors, initialState as errorsInitialState, ReportError} from "./errors";
import CurrentDate, {initialState as currentDateInitialState}         from "./currentDate/set";

export default handleActions({
    [storePicture]  : Pictures,
    [reportError]   : ReportError,
    [clearErrors]   : ClearErrors,
    [setCurrentDate]: CurrentDate
}, {
    pictures   : picturesInitialState,
    errors     : errorsInitialState,
    currentDate: currentDateInitialState
});