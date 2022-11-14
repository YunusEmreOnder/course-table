import {
    PERSON_DATA,
    PERSON_GET_DATA
} from '../constants/index';
export default {
    [PERSON_GET_DATA](state) {
        return state[PERSON_DATA];
    },
};
