import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from '../Row';

class PriceTable extends Component {
    render() {
        const { data } = this.props;

        return (
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>A: Price</th>
                    <th>B: Size</th>
                    <th>C: ...</th>
                </tr>
                </thead>
                <tbody>
                { this.renderRows(data) }
                </tbody>
            </table>
        )
    }

    renderRows = data => {
        const rows = data.map(d => <Row key={d.id} attrs={d} />);
        const isEmpty = Array.isArray(rows) && rows.lenght === 0;

        return (isEmpty ? null : rows)
    }
}

PriceTable.propTypes = {
    data: PropTypes.array.isRequired,
};

export default PriceTable;
