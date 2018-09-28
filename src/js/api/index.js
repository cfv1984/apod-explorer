import POD               from "./values/POD";
import client            from "./client";
import dateArrayToString from "../utils/date/dateArrayToString";

const findPicture = (year, month, day) => client.get("/apod", {
    params: {
        date: dateArrayToString([year, month, day])
    }
}).then(
    ok => Promise.resolve(new POD(ok.data)),
    err => Promise.reject(err.message)
);

export default {pictures: {find: findPicture}};
