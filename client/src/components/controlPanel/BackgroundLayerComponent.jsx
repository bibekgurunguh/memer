import React, { useContext } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
} from '@material-ui/core';

import { CanvasContext } from '../../contexts/CanvasContext';
import ColorSelector from './ColorSelectorComponent';

function BackgroundLayer() {
  const [canvas, setCanvas] = useContext(CanvasContext);

  return (
    <Accordion>
      <AccordionSummary>Background</AccordionSummary>
      <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
        <ColorSelector
          label="Color"
          value={canvas.background.color}
          changeValueOf={['background', 'color']}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <div style={{ margin: '0 15px' }}>Border:</div>
          <Slider
            aria-labelledby="Border"
            valueLabelDisplay="auto"
            defaultValue={canvas.background.border}
            step={15}
            min={0}
            max={45}
            onChange={(e, value) =>
              setCanvas({
                ...canvas,
                background: { ...canvas.background, border: value },
              })
            }
          />
        </div>
        <ColorSelector
          label="Border Color"
          value={canvas.background.borderColor}
          changeValueOf={['background', 'borderColor']}
        />
      </AccordionDetails>
    </Accordion>
  );
}

export default BackgroundLayer;
