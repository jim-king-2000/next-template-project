import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export class CanvasReactor extends Component {
  componentDidUpdate() {
    if (!this.props.setFitView) return;
    const mapView = this.props.__map__.MapView;
    setTimeout(() =>mapView.setFitView(), 100);
    if (this.props.onUpdateEnd) this.props.onUpdateEnd();
  }

  render() {
    if (!this.props.tracingMode) return null;

    const mapView = this.props.__map__.MapView;
    const isMarkersInViewport = mapView.isInView(this.props.markers);
    if (!isMarkersInViewport) {
      mapView.setFitView();
    }
    return null;
  }
}