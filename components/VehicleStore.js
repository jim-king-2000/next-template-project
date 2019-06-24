import { observable, autorun } from 'mobx';

export default class {
  constructor(vehicles) {
    this.vehicles = vehicles;
  }

  @observable vehicles = [];

}