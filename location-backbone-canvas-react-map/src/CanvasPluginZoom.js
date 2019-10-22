import React from 'react';
import { Box, Button, CheckBox } from 'grommet';
import { Home, Add, Subtract } from 'grommet-icons';
import { observer } from 'mobx-react';
import { CanvasMapStyle } from './CanvasMapStyle';

export const CanvasPluginZoom = observer(
  ({ __map__, tracingMode, onChange, ...props }) => {
    const mapView = __map__.MapView;
    return (
      <Box margin='xsmall' gap='xsmall' align='center' {...props}>
        <Button plain={false} icon={<Home />}
          onClick={() => mapView.setFitView()} />
        <Button plain={false} icon={<Add />}
          onClick={() => mapView.zoomIn()} />
        <Button plain={false} icon={<Subtract />}
          onClick={() => mapView.zoomOut()} />
        <CheckBox toggle label='跟踪模式' checked={tracingMode}
          onChange={onChange} />
        <CanvasMapStyle __map__={__map__} />
      </Box>
    );
  }
);