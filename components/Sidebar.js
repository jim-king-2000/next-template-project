import { Box } from 'grommet';
import { VehicleSelector } from 'location-backbone-fe';

export default ({ store, ...props }) => (
  <Box width='medium'>
    <VehicleSelector
      overflow='auto'
      vehicles={store.vehicles}
      onChange={store.pickVehicle}
      {...props} />
  </Box>
);
