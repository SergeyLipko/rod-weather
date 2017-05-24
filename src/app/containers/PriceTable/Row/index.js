import React, { Component } from 'react';
import PropTypes from 'prop-types';
import'./style.css';

class Row extends Component {
    setRowColor = val => {
        if (val <= 100) {
            return 'light-green'
        } else if (val >= 100 && val <= 150) {
            return 'white'
        } else if (val >= 150 && val <= 200) {
            return 'grey'
        } else if (val >= 200 && val <= 250) {
            return 'deep-red'
        }
    };

    render() {
        const row = this.props ? this.props.attrs : {};

        return (
            <tr className={"row-wrapper " + this.setRowColor(this.props.attrs.price)}>
                <td>{row.id}</td>
                <td>{row.price}</td>
                <td>{row.size}</td>
                <td>...</td>
            </tr>
        )
    }
}

Row.propTypes = {
    attrs: PropTypes.object.isRequired,
};

export default Row;
