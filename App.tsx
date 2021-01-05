import { Provider } from 'mobx-react';
import * as React from 'react';
import { View, ScrollView, StyleSheet, AppRegistry } from 'react-native';

import DefaultContainer from './components/DefaultContainer/DefaultContainer';
import FeaturedProduct from './components/FeaturedProduct/FeaturedProduct';
import Filter from './components/Filter/Filter';
import StatusbarColored from './components/StatusbarColored/StatusbarColored';
import helpers from './helpers';
import IListItem from './interfaces/IListItem';
import Products from './scenes/Products';
import Stores from './stores/RootStores';

const App = () => {
  const [dataProducts, setDataProducts] = React.useState<IListItem[]>();

  return (
    <>
      <Provider {...Stores}>
        <StatusbarColored backgroundColor={helpers.colors.primary} barStyle="dark-content" />
        <View style={styles.container}>
          {/* <DefaultContainer overflow={false} spaceAtTop borderRadius background="transparent">
            <FeaturedProduct />
          </DefaultContainer>

          <DefaultContainer hasPadding borderRadius>
            <Filter />
          </DefaultContainer> */}
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
