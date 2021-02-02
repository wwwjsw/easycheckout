import { makeObservable, observable, action, runInAction } from 'mobx';

import BaseStore from './BaseStore';

export default class ProductsStore extends BaseStore {
  USER_PATH = `${this.POSTS_URI}E1BiJf5TF?delay=3000`;
  isRefresing = true;
  products = [];
  error = '';

  constructor() {
    super();

    makeObservable(this, {
      products: observable,
      isRefresing: observable,
      error: observable,
      fetchProductsAsync: action,
    });
  }

  fetchProductsAsync = async () => {
    try {
      const response = await fetch(`${this.USER_PATH}`);
      const responseProducts = await response.json();
      runInAction(() => {
        this.isRefresing = true;
        this.products = responseProducts;
      });
    } catch (e) {
      runInAction(() => {
        this.error = JSON.stringify(e.message, null, 2);
        this.products = [];
      });
    } finally {
      runInAction(() => {
        this.isRefresing = false;
      });
    }
  };
}
