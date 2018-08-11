import React from 'react';
import PropTypes from 'prop-types';
import ajax from './ajax';
import { StyleSheet, Text, Image, View   } from 'react-native';
import {priceDisplay} from './util';

class DealDetail extends React.Component{
  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
  };
  state = {
    deal: this.props.initialDealData,
  };
  async componentDidMount(){
    const fullDeal = await ajax.fetchlDealDetail(this.state.deal.key);
    console.log(fullDeal);
    this.setState({
      deal: fullDeal,
    });
  }
  render() {
    const { deal } = this.state;
    return (
      <View>
        <Image source={{ uri: deal.media[0] }}  style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{deal.title} </Text>
          <View style={styles.footer}>
            <Text style={styles.cause}>{deal.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
       {deal.user && ( 
        <View>
            <Image source={{uri: deal.user.avatar}} style={styles.avatar} />
            <Text style={styles.description}>{deal.user.name} </Text>
          </View>
      )}
        <View>
          <Text style={styles.description}>{deal.description} </Text>
        </View>
      </View>
  );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginTop: 50,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 9,
  },
  description: {
    margin: 9,
  },
});


export default DealDetail;