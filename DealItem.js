import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, Image, View } from 'react-native';



class DealItem extends React.Component{
  static propTypes = {
    deal: PropTypes.object.isRequired,
  };
  render() {
    const { deal } = this.props;
    return (
      <View>
        <Image source={{ uri: this.props.deal.media[0] }} 
          style={styles.image}
        />
        <View>
          <Text>{deal.title} </Text>
          <Text>{deal.price} </Text>
          <Text>{deal.cause.name} {"\n"} </Text>
        </View>

      </View>
  );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
  }
})

export default DealItem;