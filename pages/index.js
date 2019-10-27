import React, { Component } from 'react';
import { Grommet, Box } from 'grommet';
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
const mapType = MapTypes.GOOGLEMAP;

export default class extends Component {
  state = new PositionStore(this.props.vehicles, undefined, mapType.coordType);

  static async getInitialProps() {
    const resp = await client.listThing({ appId, authorization });
    const vehicles = await resp.json();
    return { vehicles };
  }

  render = () => (
    <Grommet full plain>
      <Box fill direction='row'>
        <Sidebar store={this.state} />
        <MapCanvas
          store={this.state}
          mapKey={mapType.mapKey}
          mapVendor={mapType.mapVendor}
        />
      </Box>
    </Grommet>
  );
}
