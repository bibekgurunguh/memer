import React from 'react';

import './CanvasScreen.scss';
import Canvas from '../components/CanvasComponent';
import ControlPanel from '../components/controlPanel/ControlPanelComponent';

function CanvasScreen() {
  return (
    <div className="canvasScreenContainer">
      <Canvas />
      <ControlPanel />
    </div>
  );
}

export default CanvasScreen;
