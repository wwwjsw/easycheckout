import { observable } from 'mobx';

export default class BaseStore {
  /**
   * Posts URI Host.
   */
  POSTS_URI = 'https://next.json-generator.com/api/json/get/';

  /**
   * Indicates wheather the
   */
  @observable isRefresing = false;
}
