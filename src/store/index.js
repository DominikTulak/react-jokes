//import axios from "axios";

const ACTION = "ACTION";
const http = new XMLHttpRequest();
http.open("GET", "http://api.icndb.com/jokes/random");
http.send();
let out;

export const action = () => {
    out = JSON.parse(http.response).value.joke;
    http.open("GET", "http://api.icndb.com/jokes/random");
    http.send();
    return {type: ACTION }
}

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTION: {
            return {...state, message: out};
        }
        default: {
            return state;
        }
    }
}