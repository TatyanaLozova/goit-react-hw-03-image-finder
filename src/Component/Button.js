import React from "react";
import PropTypes from 'prop-types';
import s from "../App.module.css";

const Button = ({ onLoadMore }) => {
    return (
        <button type="button" onClick={onLoadMore} className={s.Button}>Load more...</button>
    );
};

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,

};

export default Button;