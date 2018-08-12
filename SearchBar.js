import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

class SearchBar extends React.Component{
  render() {
    // const { deal } = this.state;
    return (
      <TextInput
        styles={styles.input}
      />
    );
  }
}

const styes = StyleSheet.create({
  input: {
    height: 40,
  }
});

export default SearchBar
