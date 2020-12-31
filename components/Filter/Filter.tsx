import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import helpers from '../../helpers';

const Filter = () => (
  <View style={styles.container}>
    <Text style={styles.containerTitle}>Departamentos</Text>
    <View style={styles.filters}>
      {[
        'eletrônicos',
        'Celulares e Telefones',
        'Ferramentas e construção',
        'bebês',
        'Eletrônicos',
        'brinquedos e hobbies',
      ].map((item) => (
        <TouchableOpacity style={styles.filter} key={item}>
          <Text style={styles.filterTitle}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: helpers.sizes.width.full,
  },
  containerTitle: {
    marginBottom: helpers.sizes.normal,
    color: '#242323',
    fontWeight: 'bold',
  },
  filters: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filter: {
    marginBottom: helpers.sizes.normal,
    marginRight: helpers.sizes.normal,
    borderRadius: helpers.sizes.double,
    backgroundColor: helpers.colors.blue,
    paddingHorizontal: helpers.sizes.normal,
    paddingVertical: helpers.sizes.half,
  },
  filterTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: helpers.colors.white,
  },
});

export default Filter;
