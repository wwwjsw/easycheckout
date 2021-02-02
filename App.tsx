import { Provider } from 'mobx-react';
import * as React from 'react';
import { View, ScrollView, StyleSheet, AppRegistry } from 'react-native';

import DefaultContainer from './src/components/DefaultContainer/DefaultContainer';
import FeaturedProduct from './src/components/FeaturedProduct/FeaturedProduct';
import Filter from './src/components/Filter/Filter';
import StatusbarColored from './src/components/StatusbarColored/StatusbarColored';
import helpers from './src/helpers';
import IListItem from './src/interfaces/IListItem';
import Products from './src/scenes/Products';
import Stores from './src/stores/RootStores';

if (__DEV__) {
  import('./ReactotronConfig');
}

const App = () => {
  const [dataProducts, setDataProducts] = React.useState<IListItem[]>();

  return (
    <>
      <Provider {...Stores}>
        <StatusbarColored backgroundColor={helpers.colors.primary} barStyle="dark-content" />
        <View style={styles.container}>
          {/* MOST RELEVANT PRODUCT OF USER */}
          <DefaultContainer overflow={false} spaceAtTop borderRadius background="transparent">
            <FeaturedProduct />
          </DefaultContainer>

          {/* MAIN FILTER */}
          <DefaultContainer hasPadding borderRadius>
            <Filter />
          </DefaultContainer>

          {/* PRODUCTS LIST */}
          <Products />
        </View>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: helpers.colors.black,
  },
  paragraph: {
    color: 'white',
  },
});

export default App;
