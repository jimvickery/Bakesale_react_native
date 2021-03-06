import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

class SearchBar extends React.Component{
  static propTypes = {
    searchDeals: this.PropTypes.func.isRequired,
  }
  state={ 
    searchTerm: '',
  };
  debounceSearchDeals = debounce(this.props.searchDeals, 300);
  handleChange = (searchTerm) => {
    this.setState({ searchTerm }, () => {
      this.debounceSearchDeals(this.state.searchTerm);
    });
  };
  render() {
    // const { deal } = this.state;
    return (
      <TextInput placeholder="Search All Beals" style={styles.input}
      onChangeText={this.handleChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 12,
  }
});

export default SearchBar;
