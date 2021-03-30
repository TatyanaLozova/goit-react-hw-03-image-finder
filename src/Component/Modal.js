import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from "../App.module.css";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
       window.addEventListener('keydown', this.handleKeyDown); 
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };
    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };
    render() {
        return createPortal(          
<div className={s.Overlay} onClick={this.handleBackdropClick}>
  <div className={s.Modal}>{this.props.children}</div>
</div>,

            modalRoot,
        );
}
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
      children: PropTypes.object.isRequired,
};


