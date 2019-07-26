import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { inputChange } from "./actions";

class PopupList extends PureComponent {
  constructor(props) {
    super(props);
  }

  formatResults = (word, search) => {
    let searchIndex = word.toLowerCase().indexOf(search.toLowerCase());
    let wordParts = {
      first: word.slice(0, searchIndex),
      second: word.slice(searchIndex, searchIndex + search.length),
      third: word.slice(searchIndex + search.length, )
    }

    return (
      <React.Fragment>
        <span>{wordParts.first}</span>
        <b>{wordParts.second}</b>
        <span>{wordParts.third}</span>
      </React.Fragment>
    )
  }

  render() {
    console.log(1);
    if (!this.props.searchInputValue) {
      return null
    }
    return (
      <ul className="PopupList">{this.props.autocompletePlanets.map(item => 
          // This is dirty way to get index of a planet in swapi DB, since that's the only place
          // where they send it. But we still can use it and create a url for certain planet for future. 
          <li key={item.url.slice(29,-1)}>{this.formatResults(item.name, this.props.searchInputValue)}</li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/ ) => {
  return {
    autocompletePlanets: state.autocompletePlanets,
    searchInputValue: state.searchInputValue,
  }
}

const mapDispatchToProps = { inputChange };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupList);