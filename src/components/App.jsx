import React, { Component } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchImages } from '../helpers/pixabayApi';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMore } from './LoadMore/LoadMore';
import { Loader } from './Loader/Loader';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    totalHits: 0,
    isLoading: false,
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
      this.setState({ isLoading: true });
      fetchImages(query, page)
        .then(data => {
          this.setState(prev => ({
            images: page === 1 ? data.hits : [...prev.images, ...data.hits],
            totalHits:
              page === 1
                ? data.totalHits - data.hits.length
                : data.totalHits - [...prev.images, ...data.hits].length,
          }));
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmitForm} />

        <ImageGallery images={this.state.images} />

        {!!this.state.totalHits &&
          (!this.state.isLoading ? (
            <LoadMore onLoadMore={this.handleLoadMore} />
          ) : (
            <Loader />
          ))}
      </>
    );
  }
}

export default App;
