import { Box, CheckBox } from 'grommet';
import { observer } from 'mobx-react';

export default observer(({ store, ...props }) => (
  <Box {...props}>
    {store && store.vehicles.map(v =>
      <CheckBox
        key={v.thingId}
        label={v.thingName}
        checked={!!v.enabled}
        onChange={e => v.enabled = e.target.checked} />)}
  </Box>
));
