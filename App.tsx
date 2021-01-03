import * as React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import DefaultContainer from './components/DefaultContainer/DefaultContainer';
import FeaturedProduct from './components/FeaturedProduct/FeaturedProduct';
import Filter from './components/Filter/Filter';
import ListItem from './components/ListItem/ListItem';
import StatusbarColored from './components/StatusbarColored/StatusbarColored';
import helpers from './helpers';
import IListItem from './interfaces/IListItem';

export default function App() {
  const [dataProducts, setDataProducts] = React.useState<IListItem[]>();

  React.useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    const response = await fetch('https://next.json-generator.com/api/json/get/E1BiJf5TF');
    const data: IListItem[] = await response.json();
    setDataProducts(data);
  };

  return (
    <>
      <StatusbarColored backgroundColor={helpers.colors.primary} barStyle="dark-content" />
      <DefaultContainer hasPadding spaceAtTop isRow noMargin background={helpers.colors.primary}>
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
        {dataProducts?.map((item) => (
          <DefaultContainer hasPadding borderRadius key={item._id}>
            <ListItem
              productImage={item.productImage}
              productName={item.productName}
              productFullPrice={item.productFullPrice}
              productCreditPrice={item.productCreditPrice}
            />
          </DefaultContainer>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: helpers.colors.black,
  },
  logo: {
    width: 30,
    height: 30,
    backgroundColor: helpers.colors.black,
    borderRadius: 15,
  },
  menu: {
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
    flexGrow: 1,
    backgroundColor: helpers.colors.black,
  },
  paragraph: {
    color: 'white',
  },
});
