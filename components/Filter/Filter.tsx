import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Filter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>Departamentos</Text>
      <View style={styles.filters}>
        {['eletrônicos', 'Celulares e Telefones', 'Ferramentas e construção', 'bebês', 'Eletrônicos', 'brinquedos e hobbies'].map((item) => (
          <View style={styles.filter} key={item}>
            <Text style={styles.filterTitle}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    color: '#fff'
  },
  containerTitle: {
    marginBottom: 10,
    color: '#e5e5e5',
    fontWeight: 'bold',
  },
  filters: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filter: {
    marginBottom: 10,
    marginRight: 10,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#e5e5e5',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  filterTitle: {
    fontSize: 9,
    lineHeight: 10,
    fontWeight: 'bold',
    color: '#242323',
  },
});

export default Filter;