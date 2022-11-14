import {
    PERSON_DATA,
    PERSON_SET_DATA
} from '../constants/index';
export default {
    [PERSON_SET_DATA](state, payload) {
        state[PERSON_DATA] = payload;
    },
};
