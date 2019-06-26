import { observable, autorun } from 'mobx';
import io from 'socket.io-client';
import { TsdbClient } from 'externalSDK';
import { appId, authorization } from './account';

const tsdbClient = new TsdbClient();

export default class {
  constructor(vehicles) {
    this.vehicles = vehicles;
    autorun(async () => {
      const checkedVehicles = this.vehicles.filter(v => v.enabled);
      const positions = await Promise.all(checkedVehicles.map(async v => Object.assign(
        {}, v, await tsdbClient.getLastPosition({ appId, thingId: v.thingId, authorization })
      )));
      this.positionIndex = new Map(positions.map((p, i) => [p.thingId, i]));
      this.positions = positions;
    });
    if (typeof window !== 'undefined') {
      const socket = io('https://locationbackbone.top', { transports: [ 'websocket' ] });
      socket.on('connect', () => {
        const vehiclesEnabled = this.vehicles.filter(v => v.enabled);
        const thingIds = vehiclesEnabled.map(v => v.thingId);
        setTimeout(() => socket.send({ sub: thingIds }), 1000);
        console.log('Socket.io connected.');
      });

      socket.on('message', data => {
        const thingData = data.data[0];
        console.log(thingData);
        const index = this.positionIndex.get(data.thingId);
        if (index === undefined) return;
        const newPosition = {
          ...this.positions[index],
          ...thingData,
          ...thingData.location,
          ...thingData.sensors
        };
        this.positions[index] = newPosition;
      });

      this.pickVehicle = (v, checked) => {
        v.enabled = checked;
        socket.send(checked ? { sub: [v.thingId] } : { unsub: [v.thingId] });
      }
    }
  }

  @observable vehicles = [];
  @observable positions = [];
}