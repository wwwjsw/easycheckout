import React from 'react';
import { Text, View, ScrollView, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

const Filter = () => {
  return (
    <View style={styles.container}>
      <Text>Departamentos</Text>
      <View style={styles.filters}>
        {['eletrônicos', 'Celulares e Telefones', 'Ferramentas e construção', 'bebês', 'Eletrônicos', 'brinquedos e hobbies'].map((item) => (
          <View key={item}>
            <Text>{item}</Text>
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
    backgroundColor: '#242323',
    color: '#fff'
  },
  filters: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Filter;