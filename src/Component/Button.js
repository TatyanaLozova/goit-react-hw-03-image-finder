import React from "react";
import PropTypes from 'prop-types';


const Button = ({ onHandleClick }) => {
    return (
        <button type="button" onClick={onHandleClick}>Загрузить ещё...</button>
    );
};

Button.propTypes = {
    onHandleClick: PropTypes.func.isRequired,

};

export default Button;