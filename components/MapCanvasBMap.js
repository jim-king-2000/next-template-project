import { Box } from 'grommet';
import { observer } from 'mobx-react';
import { CanvasPositionMonitor } from 'location-backbone-canvas-bmap';

export default observer(({ store }) => (
  <Box flex={{ grow: 1, shrink: 1 }}>
    <CanvasPositionMonitor
      positions={store.positions}
      selectedThing={store.selectedVehicle}
      selectThingId={thingId => store.selectedThingId = thingId}
    />
  </Box>
));