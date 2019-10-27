import { Box } from 'grommet';
import { observer } from 'mobx-react';
import { CanvasPositionMonitor } from 'location-backbone-canvas-react-map';

export default observer(({ store, mapKey, mapVendor }) => (
  <Box flex={{ grow: 1, shrink: 1 }}>
    <CanvasPositionMonitor
      mapKey={mapKey}
      mapVendor={mapVendor}
      setFitView={!!store.setFitView}
      onUpdateEnd={() => store.setFitView = false}
      positions={store.positions}
      selectedThing={store.selectedVehicle}
      selectThingId={thingId => store.selectedThingId = thingId}
    />
  </Box>
));