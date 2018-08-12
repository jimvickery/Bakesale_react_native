import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import denounce from 'lodash.denounce';

class SearchBar extends React.Component{
  static propTypes = {
    searchDeals: this.propTypes.func.isRequired,
  }
  state={ 
    searchTerm: '',
  };
  denounceSearchDeals = denounce(this.props.searchDeals, 300);
  handleChange = (searchTerm) => {
    this.setState({ searchTerm }, () => {
      this.denounceSearchDeals(this.state.searchTerm);
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
