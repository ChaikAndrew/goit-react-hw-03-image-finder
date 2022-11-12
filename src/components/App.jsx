import React, { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchImages } from '../helpers/pixabayApi';
import { ImageGallery } from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };
  handleSubmitForm = query => {
    this.setState({ query });
  };
  componentDidUpdate(_, prevState) {
    const { images, query, page } = this.state;
    if (prevState.query !== query) {
      fetchImages(query, page).then(data => {
        this.setState(prev => ({ images: [...prev.images, ...data.hits] }));
      });
    }
  }

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmitForm} />
        <ImageGallery images={this.state.images} />
      </>
    );
  }
}

export default App;
