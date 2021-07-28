import axios from "axios";
import {
    SERVER_API
} from "./api.constants";

export const sendEmail = (mailData = null) => {
    if (!mailData) return;

    axios.post(`${SERVER_API}/mailer/send`, { ...mailData
        })
        .then(function(response) {
            console.log('response', response);
        })
        .catch(function(error) {
            console.log('error', error);
        });
}