import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Modal = ({ isOpen, onCloseRequest }) =>
    <div className={isOpen ? "modal-open" : "modal-hidden"}>
        <div onClick={onCloseRequest} className="modal-overlay"/>
        <div className="modal-form-wrapper">
            <form action="/" method="post" className="form">
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <input
                    required
                    type="number"
                    name="phone-number"
                    placeholder="Phone number"
                />
                <input
                    type="submit"
                    placeholder="Submit"
                />
            </form>
        </div>
    </div>;

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onCloseRequest: PropTypes.func.isRequired,
};

export default Modal;