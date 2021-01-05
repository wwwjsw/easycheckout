import ProductsStore from './ProductsStore';

class RootStores {
  constructor() {
    this.productsStore = new ProductsStore();
  }
}

export default new RootStores();
