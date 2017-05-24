import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PriceTable from './Table';
import Modal from '../../components/Modal';

class AppContent extends React.Component {
    state = {
      isModalOpen: false,
    };

    render() {
        return (
            <section>
                <div className="container is-fluid">
                    { this._content() }
                </div>
            </section>
        )
    }

    _content() {
        const { priceData } = this.props;
        let { isModalOpen } = this.state;

        return (
            <section className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <div className="s10" />
                        <section>
                            { priceData && <PriceTable data={priceData} /> }
                        </section>
                    <div className="s20" />

                    <Modal
                        onCloseRequest={() => this.setState({ isModalOpen: false })}
                        isOpen={isModalOpen}
                    />

                    <button
                        type="button"
                        onClick={() => this.setState({ isModalOpen: true })}
                        className="button is-primary"
                    >
                        Contact form modal
                    </button>
                </div>
            </section>
        )
    }
}

AppContent.propTypes = {
    priceData: PropTypes.array,
};

const mapStateToProps = ({ price }) => ({
    priceData: price.exampleData.example,
});

export default connect(mapStateToProps)(AppContent);
