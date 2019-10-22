import React from 'react';
import { InfoWindow } from 'location-backbone-react-map';
import { observer } from 'mobx-react';
import { Table, TableBody, TableRow, TableCell } from 'grommet';
import { defaultPropertyTemplate } from 'location-backbone-canvas';

export const CanvasInformation = observer(({
  __map__, onClose, data, template, ...props
}) => {
  template = template || defaultPropertyTemplate;
  return (
    <>
      {data && <InfoWindow
        __map__={__map__}
        position={{
          latitude: data.latitude,
          longitude: data.longitude
        }}
        events={{ close: onClose }}
        {...props}
      >
        <Table>
          <TableBody>
            {Array.isArray(template) && template.map(t => (
              data[t.property] === undefined ?
              undefined :
              (<TableRow key={t.property}>
                <TableCell>{t.label}</TableCell>
                <TableCell>
                  {t.transform ?
                    t.transform(data[t.property]) :
                    data[t.property]}
                </TableCell>
              </TableRow>)
            ))}
          </TableBody>
        </Table>
      </InfoWindow>}
    </>
  );
});