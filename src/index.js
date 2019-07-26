import React from 'react';
import ReactDOM from 'react-dom';
import store from "./store";
import SearchBox from './SearchBox';
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
		<SearchBox />
  </Provider>, document.getElementById('root')
);