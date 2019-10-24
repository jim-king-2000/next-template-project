import { Box } from 'grommet';
import { observer } from 'mobx-react';
import { CanvasPositionMonitor } from 'location-backbone-canvas-react-map';

export default observer(({ store }) => (
  <Box flex={{ grow: 1, shrink: 1 }}>
    <CanvasPositionMonitor
      // mapKey='99c0746b70009d496380367b4f8f8494'
      mapKey='ezIVxAYOPRYR8D3iGKsP6jFlqMiuZjTr'
      mapVendor='RBMap'
      setFitView={!!store.setFitView}
      onUpdateEnd={() => store.setFitView = false}
      positions={store.positions}
      selectedThing={store.selectedVehicle}
      selectThingId={thingId => store.selectedThingId = thingId}
    />
  </Box>
));