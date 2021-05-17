import React, { useState, useContext } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import GradeIcon from '@material-ui/icons/Grade';

import { CanvasContext } from '../../contexts/CanvasContext';
import { newTextLayer } from '../../constants/constants';
import { deepCopy } from '../../utils/utilities';

function CreateLayer() {
  const [isExpanded, setExpanded] = useState(false);
  const [canvas, setCanvas] = useContext(CanvasContext);

  function handleText() {
    const newLayers = [...canvas.layers, deepCopy(newTextLayer)];
    setCanvas({ ...canvas, layers: newLayers });
    setExpanded(false);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        margin: '15px 0',
      }}
    >
      <Fab color="primary" onClick={() => setExpanded(!isExpanded)}>
        <AddIcon />
      </Fab>
      {isExpanded && (
        <div>
          <Fab
            style={{ margin: 10, display: 'absolute', top: -100 }}
            onClick={handleText}
          >
            <TextFieldsIcon />
          </Fab>
          <Fab style={{ margin: 10, display: 'absolute', top: -140 }}>
            <ImageIcon />
          </Fab>
          <Fab style={{ margin: 10, display: 'absolute', top: -100 }}>
            <GradeIcon />
          </Fab>
        </div>
      )}
    </div>
  );
}

export default CreateLayer;
