import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Sunny, Flurries, Rainy, Cloudy } from '../WeatherIcons';
import './style.css';

const setDayName = key => {
    const daysCollection = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const days = [...daysCollection, ...daysCollection];
    const curr = days.indexOf(moment().format('dddd')) + key;

    return days[curr];
};

const setDayIcon = state => {
    switch(state) {
        case 'sky is clear':
            return <Sunny />;

        case 'light rain':
        case 'moderate rain':
            return <Rainy />;

        case 'scattered clouds':
        case 'few clouds':
            return <Cloudy />;

        case 'light snow':
            return <Flurries />;

        default:
            return <Cloudy />;
    }
};

const Day = ({...data }) =>
    <div className="day-wrapper">
        <div className="day-top-content">
            <div className="day-icon-wrapper">
                { setDayIcon(data.data.weather[0].description) }
            </div>

            <ul className="temperature-list">
                <li> Day temp: {data.data.temp.day} </li>
                <li> Max temp: {data.data.temp.max} </li>
                <li> Min temp: {data.data.temp.min} </li>
            </ul>

            <ul className="day-params">
                <li> Wind speed: { data.data.speed } </li>
                <li> Humidity: { data.data.humidity } </li>
                <li> Pressure: { data.data.pressure } </li>
            </ul>
        </div>
        
        <div className="day-bottom-content">
            <span className="day-name">
                - { setDayName(data._key) } -
            </span>

            <span className="day-main">
                { data.data.weather[0].main }
            </span>
        </div>
    </div>;

Day.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Day;