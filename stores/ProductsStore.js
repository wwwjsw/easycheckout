import { makeObservable, observable, action } from 'mobx';

import BaseStore from './BaseStore';

export default class ProductsStore extends BaseStore {
  USER_PATH = `${this.POSTS_URI}E1BiJf5TF`;
  isRefresing = true;
  products = [];
  
  constructor(products) {
    super();

    makeObservable(this, {
      isRefresing: observable,
      products: observable,
      fetchUsersAsync: action,
    });
    this.products = products;
  }
  async fetchUsersAsync() {
    try {
      this.isRefresing = true;
      const response = await fetch(`${this.USER_PATH}`);
      this.products = await response.json();
    } catch (error) {
      console.warn(`fetchUsersAsync (ERROR) - ${JSON.stringify(error.message, null, 2)}`);
    } finally {
      this.isRefresing = false;
    }
  }
}
