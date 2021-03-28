import React from "react";
import PropTypes from 'prop-types';


const Button = ({ onClick }) => {
    return (
        <button type="button" onClick={onClick}>Загрузить ещё...</button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,

};

export default Button;