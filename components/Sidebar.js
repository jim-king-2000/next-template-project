import { VehicleSelector } from 'location-backbone-fe';

export default ({ store, ...props }) => 
  <VehicleSelector
    vehicles={store.vehicles}
    onChange={store.pickVehicle}
    {...props} />
;
