import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';

import './ControlPanelStyle.scss';
import { CanvasContext } from '../../contexts/CanvasContext';
import BackgroundLayer from './BackgroundLayerComponent';
import Layer from './LayerComponent';
import CreateLayer from './CreateLayerComponent';

function ControlPanel() {
  const [canvas, setCanvas] = useContext(CanvasContext);
  const [activeLayer, setActiveLayer] = useState(null);

  const deleteLayer = (index) => {
    const newLayers = [...canvas.layers];
    newLayers.splice(index, 1);
    setCanvas({
      ...canvas,
      layers: newLayers,
    });
    setActiveLayer(null);
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
      setActiveLayer(index - 1);
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
      setActiveLayer(index + 1);
    }
  };

  const layerAnim = {
    initial: { scale: 0, y: 0 },
    create: { scale: 1 },
  };

  return (
    <div className="controlPanelContainer">
      <BackgroundLayer />
      <CreateLayer />
      {canvas.layers.length &&
        canvas.layers.map((layer, index) => (
          <motion.div
            className="layer"
            variants={layerAnim}
            initial="initial"
            animate="create"
            key={canvas.layers.length - index}
          >
            <Layer
              type={layer.type}
              content={layer.content}
              index={index}
              totalLayers={canvas.layers.length}
              deleteLayer={deleteLayer}
              moveLayerUp={moveLayerUp}
              moveLayerDown={moveLayerDown}
              activeLayer={activeLayer}
              setActiveLayer={setActiveLayer}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ControlPanel;
