import React, { Component } from 'react';
import { Select } from 'grommet';

export class CanvasMapStyle extends Component {
  render() {
    const __map__ = this.props.__map__;
    return <Select
      options={['全图', '底图']}
      value={'all' === 'all' ? '全图' : '底图'}
      onChange={({ option }) => {
        __map__.setFeatures(option === '全图' ? 'all' : ['bg']);
        this.forceUpdate();
      }}
    />;
  }
}