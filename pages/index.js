import React, { Component } from 'react';
import { Grommet, Box, Select } from 'grommet';
import dynamic from 'next/dynamic';
import { ThingManagementClient } from 'location-backbone-sdk';
import { PositionStore } from 'location-backbone-store';
import { appId, authorization } from '../utils/account';
import Sidebar from '../components/Sidebar';
import MapTypes from '../utils/mapTypes';

const MapCanvas = dynamic(
  () => import('../components/MapCanvasRMap'),
  { ssr: false }
);
const client = new ThingManagementClient();
const initMapType = MapTypes[0];

export default class extends Component {
  state = {
    mapType: initMapType,
    store: new PositionStore(
      this.props.vehicles,
      undefined,
      initMapType.coordType
    ),
  }

  switchMapType = mapType => {
    this.setState({
      mapType,
      store: new PositionStore(
        this.props.vehicles,
        undefined,
        mapType.coordType),
    });
  }

  static async getInitialProps() {
    const resp = await client.listThing({ appId, authorization });
    const vehicles = await resp.json();
    return { vehicles };
  }

  render() {
    return (
      <Grommet full plain>
        <Box fill direction='row'>
          <Box>
            <Select
              options={MapTypes}
              value={this.state.mapType}
              labelKey='label'
              onChange={({ option }) => this.switchMapType(option)}
            />
            <Sidebar store={this.state.store} />
          </Box>
          <MapCanvas
            store={this.state.store}
            mapKey={this.state.mapType.mapKey}
            mapVendor={this.state.mapType.mapVendor}
          />
        </Box>
      </Grommet>
    );
  }
}
