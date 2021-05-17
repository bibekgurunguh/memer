import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@material-ui/core';

import Color from './ColorComponent';
import { useContext } from 'react';
import { colorList } from '../../constants/constants';
import { CanvasContext } from '../../contexts/CanvasContext';

function ColorSelector({ label, value, changeValueOf }) {
  const [canvas, setCanvas] = useContext(CanvasContext);

  function changeColor(newColor) {
    if (changeValueOf) {
      if (changeValueOf.length === 2) {
        setCanvas({
          ...canvas,
          [changeValueOf[0]]: {
            ...canvas[changeValueOf[0]],
            [changeValueOf[1]]: newColor,
          },
        });
      }
      if (changeValueOf.length === 3) {
        const newCanvas = { ...canvas };
        newCanvas.layers[changeValueOf[1]].content[changeValueOf[2]] = newColor;
        setCanvas(newCanvas);
      }
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Accordion style={{ boxShadow: 'none', margin: 0 }}>
        <AccordionSummary>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {label}: &nbsp;
            <Color color={value} />
          </div>
        </AccordionSummary>
        <AccordionDetails style={{ paddingTop: 0, flexDirection: 'column' }}>
          <div
            style={{
              flexWrap: 'wrap',
              display: 'flex',
              maxWidth: 500,
              borderRadius: 10,
              borderWidth: 1,
            }}
          >
            {colorList.map((el) => (
              <Button onClick={() => changeColor(el)}>
                <Color color={el} />
              </Button>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ColorSelector;
