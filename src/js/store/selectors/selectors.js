import {createSelector}  from "reselect";
import dateArrayToString from "../../utils/date/dateArrayToString";

export const getAllPictures = (state) => state.pictures.all;

export const getCurrentDate = (state) => state.currentDate;

export const findPictureByDate = createSelector(
    [getAllPictures, (state, date) => date],
    (pics, date) => {
        const comparable = date instanceof Array ? dateArrayToString(date) : String(date);
        return date && pics.find(pic => pic.date === comparable);
    }
);
