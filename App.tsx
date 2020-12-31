import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import DefaultContainer from './components/DefaultContainer/DefaultContainer';
import FeaturedProduct from './components/FeaturedProduct/FeaturedProduct';
import Filter from './components/Filter/Filter';
import ListItem from './components/ListItem/ListItem';
import StatusbarColored from './components/StatusbarColored/StatusbarColored';

export default function App() {
  return (
    <>
      <StatusbarColored backgroundColor="#eef488" barStyle="dark-content" />
      <DefaultContainer hasPadding spaceAtTop isRow noMargin background="#eef488">
        <View style={styles.logo} />
        <View style={styles.menu} />
      </DefaultContainer>

      <ScrollView style={styles.container}>
        <DefaultContainer overflow={false} spaceAtTop borderRadius background="transparent">
          <FeaturedProduct />
        </DefaultContainer>

        <DefaultContainer hasPadding borderRadius>
          <Filter />
        </DefaultContainer>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <DefaultContainer hasPadding borderRadius key={item}>
            <ListItem />
          </DefaultContainer>
        ))}
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
    backgroundColor: '#242323',
    borderRadius: 15,
  },
  menu: {
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
    flexGrow: 1,
    backgroundColor: '#242323',
  },
  paragraph: {
    color: 'white',
  },
});
