import React, { useContext, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import Draggable from 'react-draggable';

import './CanvasStyle.scss';
import { CanvasContext } from '../contexts/CanvasContext';
import Element from './ElementComponent';

function Canvas() {
  const [canvas] = useContext(CanvasContext);
  useEffect(() => {
    console.log(canvas);
  });

  return (
    <div className="canvasContainer">
      <Paper
        className="canvas"
        elevation={10}
        style={{
          position: 'relative',
          backgroundColor: canvas.background.color,
          borderWidth: canvas.background.border,
          borderColor: canvas.background.borderColor,
          borderStyle: 'solid',
          height: canvas.background.height,
          width: canvas.background.width,
        }}
      >
        {canvas.layers.length &&
          canvas.layers.map((layer, i) => (
            <Draggable bounds=".canvas">
              <div
                id={`layer${i}`}
                style={{ display: 'inline-block', position: 'absolute' }}
              >
                <Element type={layer.type} content={layer.content} />
              </div>
            </Draggable>
          ))}
      </Paper>
    </div>
  );
}

export default Canvas;
