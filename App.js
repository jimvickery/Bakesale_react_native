import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { fetchInitialDeals } from './ajax';
import ajax from './ajax';
import DealList from './DealList';

export default class App extends React.Component {
  // state = {
  //   deals: [],
  // };
  async componentDidMount(){
    const deals = await ajax.fetchInitialDeals();
    consloe.log(deals)
    // this.setState((prevState) => {
    //   return { deals };
    // });
  }
  render() {
    return (
      <View style={styles.container}>
      
        
        {/* <DealList deals={this.state.deals} /> */}
        
         <Text style={styles.header}>Bakesale</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
