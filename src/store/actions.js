import damiData from "/src/assets/dami.js"
import {
    PERSON_SET_DATA,
    PERSON_FETCH_DATA
} from '../constants/index';
export default {
    async [PERSON_FETCH_DATA]({ commit }) {
        console.log("asd")
        commit(PERSON_SET_DATA, damiData);
    },
};
