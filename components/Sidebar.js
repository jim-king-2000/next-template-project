import { Box } from 'grommet';
import { FlatSelector } from 'location-backbone-fe';

export default ({ store, ...props }) => (
  <Box width='medium'>
    <FlatSelector
      overflow='auto'
      vehicles={store.vehicles}
      onChange={store.pickVehicle}
      {...props} />
  </Box>
);
