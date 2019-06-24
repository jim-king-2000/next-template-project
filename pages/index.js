import React, { Component } from 'react';
import { Grommet, Box } from 'grommet';
import { ThingManagementClient } from 'externalSDK';
import { appId, authorization } from '../components/account';
import Sidebar from '../components/Sidebar';
import VehicleStore from '../components/VehicleStore';

const client = new ThingManagementClient();

export default class extends Component {
  state = new VehicleStore(this.props.vehicles);

  static async getInitialProps() {
    const resp = await client.listThing({ appId, authorization });
    const vehicles = await resp.json();
    console.log(vehicles)
    return { vehicles };
  }

  render = () => (
    <Grommet full plain>
      <Box fill direction='row'>
        <Sidebar store={this.state} />
        ByteBilling front-end sample project
      </Box>
    </Grommet>
  );
}
