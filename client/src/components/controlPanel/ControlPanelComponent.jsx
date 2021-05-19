import React, { useContext } from 'react';

import './ControlPanelStyle.scss';
import { CanvasContext } from '../../contexts/CanvasContext';
import BackgroundLayer from './BackgroundLayerComponent';
import Layer from './LayerComponent';
import CreateLayer from './CreateLayerComponent';

function ControlPanel() {
  const [canvas, setCanvas] = useContext(CanvasContext);

  const deleteLayer = (index) => {
    const newLayers = [...canvas.layers];
    newLayers.splice(index, 1);
    setCanvas({
      ...canvas,
      layers: newLayers,
    });
  };

  const moveLayerUp = (index) => {
    if (index > 0) {
      const newLayers = [...canvas.layers];
      [newLayers[index], newLayers[index - 1]] = [
        newLayers[index - 1],
        newLayers[index],
      ];
      setCanvas({
        ...canvas,
        layers: newLayers,
      });
    }
  };

  const moveLayerDown = (index) => {
    if (index < canvas.layers.length - 1) {
      const newLayers = [...canvas.layers];
      [newLayers[index], newLayers[index + 1]] = [
        newLayers[index + 1],
        newLayers[index],
      ];
      setCanvas({
        ...canvas,
        layers: newLayers,
      });
    }
  };

  return (
    <div className="controlPanelContainer">
      <BackgroundLayer />
      {canvas.layers.length &&
        canvas.layers.map((layer, index) => (
          <Layer
            type={layer.type}
            content={layer.content}
            index={index}
            totalLayers={canvas.layers.length}
            deleteLayer={deleteLayer}
            moveLayerUp={moveLayerUp}
            moveLayerDown={moveLayerDown}
          />
        ))}
      <CreateLayer />
    </div>
  );
}

export default ControlPanel;
