import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import PropTypes from 'prop-types';


class DealList extends React.Component {
  static propTypes = {
    deals: PropTypes.array.isRequired,
  };
  render(){
    return(
      <View style={styles.list}>
      {/* {this.props.deals.map((deal) =>
        <Text key={deal.key}>{deal.title}~{"\n"}{deal.details}~{"\n"}</Text>
      )} */}
      <FlatList
        data={this.props.deals}
        renderItem={({item}) => <Text>{item.title}~{"\n"}</Text>}
      />

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor:  '#eee',
    flex: 1,
    width: '100%',
    paddingTop: 50,
  },
});

export default DealList;