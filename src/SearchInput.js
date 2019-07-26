import React, { Component } from 'react';
import { connect } from "react-redux";
import { inputChange } from "./actions";



class SearchInput extends Component {
  constructor(props) {
    super(props);

  }

  handleInput = (event) => {
    event.target.value ? this.props.inputChange(event.target.value) : this.props.inputChange('');
  }

  render() {
    return (
      <div className="SearchInput">
        <input type="text" value={this.props.searchInputValue} onChange={this.handleInput} placeholder="Try me" />
      </div>
    );
  }
}


const mapStateToProps = (state /*, ownProps*/) => {
  return {
    searchInputValue: state.searchInputValue
  }
}

const mapDispatchToProps = { inputChange };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);
