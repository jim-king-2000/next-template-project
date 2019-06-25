import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Box } from 'grommet';
import { Vehicles } from 'fe-fireeye-components/components';

@observer
export default class extends Component {
  render() {
    const things = this.props.store.positions.value;
    console.log(things)
    return (
      <Box flex={{ grow: 1, shrink: 1 }}>
        <Vehicles mapkey='99c0746b70009d496380367b4f8f8494'
          things={things} render={this.renderMarker} />
      </Box>
    );
  }
}