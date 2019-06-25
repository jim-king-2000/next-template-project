import { observable, autorun } from 'mobx';
import { TsdbClient } from 'externalSDK';
import { appId, authorization } from './account';

const tsdbClient = new TsdbClient();

export default class {
  constructor(vehicles) {
    this.vehicles = vehicles;
    autorun(async () => {
      const checkedVehicles = this.vehicles.filter(v => v.enabled);
      this.positions = await Promise.all(checkedVehicles.map(async v => Object.assign(
        {}, v, await tsdbClient.getLastPosition({ appId, thingId: v.thingId, authorization })
      )));
    });
  }

  @observable vehicles = [];
  @observable positions = [];
}