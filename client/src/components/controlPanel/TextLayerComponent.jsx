import React, { useContext } from 'react';
import { TextField, Slider, Switch } from '@material-ui/core';

import { CanvasContext } from '../../contexts/CanvasContext';
import ColorSelector from './ColorSelectorComponent';

function TextLayer({ content, index }) {
  const [canvas, setCanvas] = useContext(CanvasContext);

  const textChange = (str) => {
    const newLayers = [...canvas.layers];
    newLayers[index].content.value = str;
    setCanvas({
      ...canvas,
      layers: newLayers,
    });
  };

  const fontSizeChange = (size) => {
    const newLayers = [...canvas.layers];
    newLayers[index].content.size = size;
    setCanvas({
      ...canvas,
      layers: newLayers,
    });
  };

  const toggleFontShadow = (value) => {
    let newLayers = [...canvas.layers];
    newLayers[index].content.shadow = !value;
    setCanvas({
      ...canvas,
      layers: newLayers,
    });
  };

  return (
    <div style={{ flexDirection: 'column' }}>
      <TextField
        label="Text"
        value={canvas.layers[index].content.value}
        onChange={(e) => textChange(e.target.value)}
        variant="outlined"
      />
      <ColorSelector
        label="Font Color"
        value={content.color}
        changeValueOf={['layers', index, 'color']}
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
          aria-labelledby="FontSize"
          valueLabelDisplay="auto"
          defaultValue={content.size}
          step={5}
          min={15}
          max={30}
          onChange={(e, value) => fontSizeChange(value)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div style={{ margin: '0 15px' }}>Shadow</div>
        <Switch
          checked={content.shadow}
          onChange={() => toggleFontShadow(content.shadow)}
          color="primary"
        />
      </div>
    </div>
  );
}

export default TextLayer;
