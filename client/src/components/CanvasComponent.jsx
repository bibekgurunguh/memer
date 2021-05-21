import React, { useContext, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import Draggable from 'react-draggable';

import './CanvasStyle.scss';
import { CanvasContext } from '../contexts/CanvasContext';
import Element from './ElementComponent';

function Canvas() {
  const [canvas, setCanvas] = useContext(CanvasContext);
  useEffect(() => {
    console.log(canvas);
  });

  const handleDragStop = (e, draggedElement, index) => {
    const newLayers = [...canvas.layers];
    newLayers[index].x = draggedElement.x;
    newLayers[index].y = draggedElement.y;
    setCanvas({ ...canvas, layers: newLayers });
  };

  return (
    <div className="canvasContainer">
      <Paper
        className="canvas"
        elevation={10}
        style={{
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
            <Draggable
              bounds=".canvas"
              position={{ x: layer.x, y: layer.y }}
              onStop={(e, draggedElement) =>
                handleDragStop(e, draggedElement, i)
              }
            >
              <div
                id={`layer${i}`}
                className="canvas__element"
                style={{ zIndex: canvas.layers.length - i }}
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
