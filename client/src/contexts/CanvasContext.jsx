import React, { createContext, useState } from 'react';

export const CanvasContext = createContext();

export const CanvasProvider = (props) => {
  const [canvas, setCanvas] = useState({
    background: {
      color: 'black',
      border: 0,
      borderColor: 'white',
      height: 500,
      width: 750,
    },
    layers: [
      {
        type: 'text',
        content: {
          value: 'This is an Editable text. I am very very long indeed.',
          color: 'white',
          stroke: 5,
          strokeColor: 'black',
          shadow: true,
          size: 20,
        },
        x: 0,
        y: 0,
      },
    ],
  });

  return (
    <CanvasContext.Provider value={[canvas, setCanvas]}>
      {props.children}
    </CanvasContext.Provider>
  );
};
