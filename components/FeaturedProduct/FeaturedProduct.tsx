import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const FeaturedProduct = () => {
  let topGradient = ["#e2e95d", "#e2e95d00"];
  let bottomGradient = ["#e2e95d00", "#e2e95d"];

  return(
    <>
      <LinearGradient
        colors={topGradient}
        start={{x: 0, y: 0}} end={{x: 0, y: 1}}
        style={[styles.topDefault, styles.infoDefault]}
      >
        <Text
          style={[styles.infoText, styles.defaultText]}
        >
          Furadeira Bosh 1500Rpm c/ kit broca  p/  madeira e/ou vidro, lorem ipsum.....
        </Text>
      </LinearGradient>
      <Image
        source={require('../../assets/makita.png')}
        style={styles.image}
      />
      <LinearGradient
        colors={bottomGradient}
        style={[styles.bottomDefault, styles.infoDefault]}>
        <Text
          style={[styles.infoText, styles.defaultText]}        
        >
          Promoção: 8x R$79,88
        </Text>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  infoDefault: {
    height: 50,
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    padding: 10,
  },
  defaultText: {
    color: "#242323"
  },
  infoText: {
  },
  topDefault: {
    zIndex: 2,
    top: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    backgroundColor: '#ffffff03',
    height: 300,
    width: '100%',
    zIndex: 1,
    borderRadius: 10,
  },
  bottomDefault: {
    bottom: 0,
    zIndex: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
});

export default FeaturedProduct;
