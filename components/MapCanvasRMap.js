import { Box } from 'grommet';
import { observer } from 'mobx-react';
import { CanvasPositionMonitor } from 'location-backbone-canvas-react-map';

export default observer(({ store }) => (
  <Box flex={{ grow: 1, shrink: 1 }}>
    <CanvasPositionMonitor
      // mapKey='99c0746b70009d496380367b4f8f8494'
      // mapKey='ezIVxAYOPRYR8D3iGKsP6jFlqMiuZjTr'
      // mapVendor='RBMap'
      // mapKey='AhDjnlgDaR87L08Y3Uchu87Ky5vfvj8pkIQfLhGZ2yplreOxws6f3XCMHj0tMAR-'
      // mapVendor='RBingMap'
      mapKey='AIzaSyBy1-bole0TkeLc8s537ynNJauFv5iY4_I'
      mapVendor='RGoogleMap'
      setFitView={!!store.setFitView}
      onUpdateEnd={() => store.setFitView = false}
      positions={store.positions}
      selectedThing={store.selectedVehicle}
      selectThingId={thingId => store.selectedThingId = thingId}
    />
  </Box>
));