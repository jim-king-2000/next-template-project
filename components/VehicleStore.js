import { observable } from 'mobx';
import { promisedComputed } from 'computed-async-mobx';
import { TsdbClient } from 'externalSDK';
import { appId, authorization } from './account';

const tsdbClient = new TsdbClient();

export default class {
  constructor(vehicles) {
    this.vehicles = vehicles;
  }

  @observable vehicles = [];

  positions = promisedComputed([], async () => {
    const checkedVehicles = this.vehicles.filter(v => v.enabled);
    return Promise.all(checkedVehicles.map(async v => Object.assign(
      {}, v, await tsdbClient.getLastPosition({ appId, thingId: v.thingId, authorization })
    )));
  });
}