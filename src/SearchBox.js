import React, { Component, Suspense } from 'react';
import SearchInput from './SearchInput';
import PopupList from './PopupList';


class SearchBox extends Component {
  render() {
    return (
      <React.StrictMode>
        <Suspense fallback={<h1>Loading...</h1>}>
          <form className="SearchBox">
            <SearchInput />
            <PopupList />
          </form>
        </Suspense>
      </React.StrictMode>
    );
  }
}

export default SearchBox;
