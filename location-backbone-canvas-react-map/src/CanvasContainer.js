import React from 'react';
import { Map } from 'location-backbone-react-map';
import { Box, Text } from 'grommet';

export const CanvasContainer = ({ mapKey, children, ...props }) => (
  <Map mapKey={mapKey} {...props}>
    {children}
    <Box style={{
      position: 'absolute',
      right: 0,
      bottom: 0
    }}>
      <Text margin='xsmall'>版权所有&#169; 北京百特比邻信息科技有限公司</Text>
    </Box>
  </Map>
);