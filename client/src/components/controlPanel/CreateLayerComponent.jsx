import React, { useContext } from 'react';
import AddIcon from '@material-ui/icons/Add';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import GradeIcon from '@material-ui/icons/Grade';

import './CreateLayerStyle.scss';
import { CanvasContext } from '../../contexts/CanvasContext';
import { newTextLayer } from '../../constants/constants';
import { deepCopy } from '../../utils/utilities';

function CreateLayer() {
  const [canvas, setCanvas] = useContext(CanvasContext);

  function handleText() {
    const newLayers = [deepCopy(newTextLayer), ...canvas.layers];
    setCanvas({ ...canvas, layers: newLayers });
  }

  return (
    <div className="createLayerContainer">
      <div className="createButtons" onClick={handleText}>
        <TextFieldsIcon />
        <div className="createButtons__badge">+</div>
      </div>
      <div className="createButtons">
        <ImageIcon />
      </div>
      <div className="createButtons">
        <GradeIcon />
      </div>
    </div>
  );
}

export default CreateLayer;
