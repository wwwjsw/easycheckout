import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';

import helpers from '../../helpers';

const FeaturedProduct = () => {
  const topGradient = [helpers.colors.primary, helpers.colors.primarynoAlpha];
  const bottomGradient = [helpers.colors.primarynoAlpha, helpers.colors.primary];

  return (
    <>
      <LinearGradient
        colors={topGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={[styles.topDefault, styles.infoDefault]}>
        <Text style={[styles.infoText, styles.defaultText]}>
          Furadeira Bosh 1500Rpm c/ kit broca p/ madeira e/ou vidro, lorem ipsum.....
        </Text>
      </LinearGradient>
      <Image source={require('../../assets/makita.png')} style={styles.image} />
      <LinearGradient colors={bottomGradient} style={[styles.bottomDefault, styles.infoDefault]}>
        <Text style={[styles.infoText, styles.defaultText]}>Promoção: 8x R$79,88</Text>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  infoDefault: {
    height: 50,
    position: 'absolute',
    left: 0,
    right: 0,
    justifyContent: 'center',
    padding: helpers.sizes.normal,
  },
  defaultText: {
    color: helpers.colors.contrast,
  },
  infoText: {},
  topDefault: {
    zIndex: 2,
    top: 0,
    borderTopLeftRadius: helpers.sizes.normal,
    borderTopRightRadius: helpers.sizes.normal,
  },
  image: {
    zIndex: 1,
    height: helpers.sizes.height.big,
    width: helpers.sizes.width.full,
    borderRadius: helpers.sizes.normal,
  },
  bottomDefault: {
    zIndex: 2,
    bottom: 0,
    borderBottomLeftRadius: helpers.sizes.normal,
    borderBottomRightRadius: helpers.sizes.normal,
  },
});

export default FeaturedProduct;
