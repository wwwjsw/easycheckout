import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Constants from 'expo-constants';

import DefaultContainer from './components/DefaultContainer/DefaultContainer';
import StatusbarColored from './components/StatusbarColored/StatusbarColored';
import FeaturedProduct from './components/FeaturedProduct/FeaturedProduct';
import Filter from './components/Filter/Filter';

export default function App() {
  return (
    <>
      <StatusbarColored
        backgroundColor="#626262"
        barStyle="light-content"
      />
      <ScrollView style={styles.container}>
        <DefaultContainer
          hasPadding
          spaceAtTop
          isRow>
          <>
            <View style={styles.logo} />
            <View style={styles.menu} />
          </>
        </DefaultContainer>

        <DefaultContainer>
          <FeaturedProduct />
        </DefaultContainer>
        
        <DefaultContainer
          hasPadding
          >
            <Filter />
        </DefaultContainer>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242323',
  },
  logo: { 
    width: 30,
    height: 30,
    backgroundColor: '#e5e5e5',
    borderRadius: 15,
  },
  menu: {
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
    flexGrow: 1,
    backgroundColor: '#e5e5e5',
  },
  paragraph: {
    color: 'white',
  }
});
