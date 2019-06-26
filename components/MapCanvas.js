import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Box } from 'grommet';
import { CanvasContainer, CanvasPositions } from 'location-backbone-canvas';

@observer
export default class extends Component {
  render() {
    const things = this.props.store.positions.slice();
    return (
      <Box flex={{ grow: 1, shrink: 1 }}>
        <CanvasContainer mapkey='99c0746b70009d496380367b4f8f8494'>
          <CanvasPositions things={things} />
        </CanvasContainer>
      </Box>
    );
  }
}