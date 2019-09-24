import { Box } from 'grommet';
import { observer } from 'mobx-react';
import { CanvasPositionMonitor } from 'location-backbone-canvas-bingmap';

export default observer(({ store }) => (
  <Box flex={{ grow: 1, shrink: 1 }}>
    <CanvasPositionMonitor
      mapKey='AhDjnlgDaR87L08Y3Uchu87Ky5vfvj8pkIQfLhGZ2yplreOxws6f3XCMHj0tMAR-'
      setFitView={!!store.setFitView}
      onUpdateEnd={() => store.setFitView = false}
      positions={store.positions}
      selectedThing={store.selectedVehicle}
      selectThingId={thingId => store.selectedThingId = thingId}
    />
  </Box>
));