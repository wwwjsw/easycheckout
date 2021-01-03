import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import helpers from '../../helpers';

const ListItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={
          props.productImage ? { uri: props.productImage } : require('../../assets/product.png')
        }
        resizeMode="cover"
        style={styles.itemImage}
      />

      <View style={styles.containerBlock}>
        <Text numberOfLines={2} style={styles.itemName}>
          iPhone 12 Apple 128GB Verde Tela 6,1 - Câm. Dupla 12MP iOS
        </Text>
        <View style={styles.containerPrice}>
          <View>
            <Text style={styles.itemFullPrice}>
              R$500,
              <Text style={styles.itemFullPriceCents}>00</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.itemCreditCardPrice}>
              8x R$62,50
              <Text style={styles.itemCreditCardPriceSlug}>sem juros</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  itemImage: {
    height: 200,
    width: '100%',
    borderRadius: 10,
  },
  containerBlock: {
    width: '100%',
    marginTop: 10,
    flexGrow: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: 'normal',
    color: helpers.colors.black,
  },
  containerPrice: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemFullPrice: {
    color: helpers.colors.black,
    fontWeight: 'bold',
    fontSize: 12,
  },
  itemFullPriceCents: {
    fontWeight: 'bold',
    fontSize: 8,
  },
  itemCreditCardPrice: {
    color: helpers.colors.black,
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemCreditCardPriceSlug: {
    fontSize: 8,
    fontWeight: 'bold',
  },
});

export default ListItem;
