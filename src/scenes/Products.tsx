import { toJS } from 'mobx';
import { observer, inject } from 'mobx-react';
import React from 'react';
import { StyleSheet, FlatList, RefreshControl, ListRenderItemInfo } from 'react-native';

import DefaultContainer from '../components/DefaultContainer/DefaultContainer';
import ListItem from '../components/ListItem/ListItem';
import helpers from '../helpers';
import IListItem from '../interfaces/IListItem';

function Products(props) {
  const { productsStore } = props;
  const products: IListItem[] = toJS(productsStore.products);
  const isLoadingProducts: boolean = toJS(productsStore.isRefresing);
  const productsError: string = toJS(productsStore.error);

  const _keyExtractor = (ID: string) => ID.toString();

  const _renderItem = (render: ListRenderItemInfo<IListItem>) => {
    return (
      <DefaultContainer hasPadding borderRadius>
        <ListItem
          _id={render.item._id}
          productImage={render.item.productImage}
          productName={render.item.productName}
          productFullPrice={render.item.productFullPrice}
          productCreditPrice={render.item.productCreditPrice}
        />
      </DefaultContainer>
    );
  };

  React.useEffect(() => {
    productsStore.fetchProductsAsync();
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={products}
      refreshing={isLoadingProducts}
      refreshControl={
        <RefreshControl
          tintColor={helpers.colors.primary}
          titleColor={helpers.colors.primary}
          title="Atualizando"
          refreshing={isLoadingProducts}
          onRefresh={async () => await productsStore.fetchProductsAsync()}
          colors={[helpers.colors.primary, helpers.colors.black]}
        />
      }
      extraData={props}
      keyExtractor={(item) => _keyExtractor(item._id)}
      renderItem={(item) => _renderItem(item)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: helpers.colors.black,
    flex: 2,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    marginLeft: 12,
    marginRight: 12,
  },
});

export default inject('productsStore')(observer(Products));
