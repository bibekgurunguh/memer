import React, { useContext } from 'react';
import { TextField, Slider, Switch } from '@material-ui/core';

import { CanvasContext } from '../../contexts/CanvasContext';
import ColorSelector from './ColorSelectorComponent';

function ImageLayer({ content, index }) {
  const [canvas, setCanvas] = useContext(CanvasContext);

  const pathChange = (str) => {
    const newLayers = [...canvas.layers];
    newLayers[index].content.path = str;
    setCanvas({
      ...canvas,
      layers: newLayers,
    });
  };

  const imageSizeChange = (size) => {
    const newLayers = [...canvas.layers];
    newLayers[index].content.size = size;
    setCanvas({
      ...canvas,
      layers: newLayers,
    });
  };

  return (
    <div style={{ flexDirection: 'column' }}>
      <TextField
        label="Path"
        value={canvas.layers[index].content.path}
        onChange={(e) => pathChange(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div style={{ margin: '0 15px' }}>Size:</div>
        <Slider
          aria-labelledby="ImageSize"
          valueLabelDisplay="auto"
          defaultValue={content.size}
          min={10}
          max={100}
          onChange={(e, value) => imageSizeChange(value)}
        />
      </div>
    </div>
  );
}

export default ImageLayer;
