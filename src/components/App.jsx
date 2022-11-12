import React, { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchImages } from '../helpers/pixabayApi';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './LoadMore/LoadMore';
class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
  };

  handleSubmitForm = query => {
    this.setState({ query, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      fetchImages(query, page).then(data => {
        this.setState(prev => ({
          images: page === 1 ? data.hits : [...prev.images, ...data.hits],
        }));
      });
    }
  }

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmitForm} />
        <ImageGallery images={this.state.images} />
        <LoadMore onLoadMore={this.handleLoadMore} />
      </>
    );
  }
}

export default App;
