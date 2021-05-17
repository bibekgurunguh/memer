import React, { useContext } from 'react';

import './ControlPanelStyle.scss';
import { CanvasContext } from '../../contexts/CanvasContext';
import BackgroundLayer from './BackgroundLayerComponent';
import Layer from './LayerComponent';
import CreateLayer from './CreateLayerComponent';

function ControlPanel() {
  const [canvas] = useContext(CanvasContext);

  return (
    <div className="controlPanelContainer">
      <BackgroundLayer />
      {canvas.layers.length &&
        canvas.layers.map((layer, index) => (
          <Layer type={layer.type} content={layer.content} index={index} />
        ))}
      <CreateLayer />
    </div>
  );
}

export default ControlPanel;
