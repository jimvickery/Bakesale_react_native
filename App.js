import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { fetchInitialDeals } from './ajax';
import ajax from './ajax';
import DealList from './DealList';
import DealDetail from './DealDetail';

export default class App extends React.Component {
  state = {
    deals: [],
    currentDealId: null, 
  };
  async componentDidMount(){
    const deals = await ajax.fetchInitialDeals();
    console.log(deals);
    this.setState((prevState) => {
      return { deals };
    });
  }
  setCurrentDeal = (dealId) => {
    this.setState({
      currentDealId: dealId,
    });
  };

  currentDeal = () => {
    return this.state.deals.find((deal) => deal.key === this.state.currentDealId);
  };

  render() {
    if (this.state.currentDealId) {
      return <DealDetail initialDealData={this.currentDeal()} />;
    }
    if (this.state.deals.length > 0) {
      return (
      <DealList deals={this.state.deals} onItemPress={this.setCurrentDeal} />
      );
    }
      return (
      <View style={styles.container}>
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
  header: {
    fontSize: 40,
  },
});
