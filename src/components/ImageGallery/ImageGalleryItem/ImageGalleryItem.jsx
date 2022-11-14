import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    ShowModal: false,
  };

  toggleModal = () => {
    this.setState(prev => ({ ShowModal: !prev.ShowModal }));
  };
  render() {
    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={this.props.webformatURL}
          alt=""
          onClick={this.toggleModal}
        />
        {this.state.ShowModal && (
          <Modal
            modalImg={this.props.largeImageURL}
            closeModal={this.toggleModal}
            alt={this.props.alt}
          />
        )}
      </li>
    );
  }
}
