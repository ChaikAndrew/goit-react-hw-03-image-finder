import React, { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  closeByEscape = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.closeModal();
  };
  componentDidMount() {
    window.addEventListener('keydown', this.closeByEscape);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeByEscape);
  }
  render() {
    return createPortal(
      <div className="Overlay" onClick={this.props.closeModal}>
        <div className="Modal">
          <img src={this.props.modalImg} alt={this.props.alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}
