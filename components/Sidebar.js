import { VehicleSelector } from 'location-backbone-fe';

export default ({ store, ...props }) => (
  <VehicleSelector
    vehicles={store.vehicles}
    onChange={(v, checked) => store.pickVehicle(v, checked)}
    {...props} />
);
