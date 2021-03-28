import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

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
<div onClick={this.handleBackdropClick}>
  <div>
    <img src={this.props.children} alt="" />
  </div>
</div>,

            modalRoot,
        );
}
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
      children: PropTypes.object.isRequired,
};


