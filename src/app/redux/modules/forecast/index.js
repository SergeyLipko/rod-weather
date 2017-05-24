import { createAction, handleActions } from 'redux-actions';
import { getForecast } from '../../../api/forecast';

const INITIAL_STATE = {
  forecast: null,
};

const SET_FORECAST = 'forecast/SET_FORECAST';
const setForecast = createAction(SET_FORECAST);

export const loadForecast = cityId => async (dispatch) => {
    const savedCityId = sessionStorage.getItem('currentCityId');

    if (!cityId) {
        if (!savedCityId) {
            return null;
        }

        const forecast = await getForecast(savedCityId);
        await dispatch(setForecast(forecast));
    }

    if (cityId) {
        const forecast = await getForecast(cityId);
        await dispatch(setForecast(forecast));

        sessionStorage.setItem('currentCityId', cityId);
    }
};

export default handleActions({
    [SET_FORECAST]: (state, action) => ({
        ...state,
        forecast: action.payload,
    }),

}, INITIAL_STATE);