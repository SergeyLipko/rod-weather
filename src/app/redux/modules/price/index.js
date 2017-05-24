import { createAction, handleActions } from 'redux-actions';

const INITIAL_STATE = {
    exampleData: [],
};

const PRICES_UPDATE = 'prices/PRICES_UPDATE';
export const pricesUpdate = createAction(PRICES_UPDATE);

export default handleActions({
    [PRICES_UPDATE]: (state, action) => ({
        ...state,
        exampleData: action.payload
    }),

}, INITIAL_STATE);


