import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { loadForecast } from '../../redux/modules/forecast';
import './style.css';

const STATIC_CITIES = [
    { label: 'London', id: '2643743' },
    { label: 'New York', id: '5128638' },
    { label: 'Amsterdam', id: '2759794' },
    { label: 'Paris', id: '2968815' },
    { label: 'Kiev', id: '703448' },
    { label: 'Moscow', id: '524901' },
];

class Forecast extends React.Component {
    state = {
      currentCity: null,
    };

    setCity = city => {
        this.props.loadForecastData(city.id);
        this.setState({
            currentCity: city
        })
    };

    componentDidMount() {
        this.props.loadForecastData();
    }

    render() {
        const { forecast } = this.props.forecastData;

        return (
            <div>
                <div className="select-module">
                    <Select
                        className="my-select"
                        name="form-field-name"
                        clearable={false}
                        value={this.state.currentCity}
                        options={STATIC_CITIES}
                        onChange={this.setCity}
                    />
                </div>
                { forecast && forecast.city.name }
                { forecast && console.log(forecast) }
            </div>
        )
    }
}

const mapStateToProps = ({ forecast }) => ({
    forecastData: forecast,
});

const mapDispatchToProps = dispatch => ({
    loadForecastData: cityId  => dispatch(loadForecast(cityId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);