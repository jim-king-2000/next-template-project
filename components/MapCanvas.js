import { observer } from 'mobx-react';
import { Box } from 'grommet';
import moment from 'moment';
import { CanvasContainer, CanvasPositions,
  CanvasInformation } from 'location-backbone-canvas';

const template = [{
  label: '时间',
  property: 'timestamp',
  transform: ts => moment(ts).format('YYYY-MM-DD HH:mm:ss')
}, {
  label: '名称',
  property: 'thingName'
}, {
  label: '状态',
  property: 'isOnline',
  transform: isOnline => isOnline ? '在线' : '离线'
}, {
  label: '经度',
  property: 'longitude',
  transform: v => v && v.toFixed(6)
}, {
  label: '纬度',
  property: 'latitude',
  transform: v => v && v.toFixed(6)
}, {
  label: '速度',
  property: 'speed',
  transform: v => `${v && (v * 3.6).toFixed(2)} km/h`
}, {
  label: '高度',
  property: 'altitude',
  transform: v => `${v && v.toFixed(2)} m`
}, {
  label: '精度',
  property: 'accuracy',
  transform: v => `${v && v.toFixed(2)} m`
}];

export default observer(({ store }) => (
  <Box flex={{ grow: 1, shrink: 1 }}>
    <CanvasContainer mapkey='99c0746b70009d496380367b4f8f8494'>
      <CanvasPositions
        things={store.positions}
        events={{
          click: e => store.selectedVehicle = e.target.getExtData()
        }}
      />
      <CanvasInformation
        onClose={() => store.selectedVehicle = undefined}
        data={store.selectedVehicle}
        template={template}
      />
    </CanvasContainer>
  </Box>
));