import React, { useContext } from 'react';

import { CanvasContext } from '../contexts/CanvasContext';

function Element({ type, content }) {
  const [canvas] = useContext(CanvasContext);
  return (
    <div>
      {type === 'text' ? (
        <div
          style={{
            color: content.color,
            fontSize: content.size,
            textShadow: content.shadow ? '2px 2px #000000' : 'none',
            textAlign: 'center',
          }}
        >
          {content.value}
        </div>
      ) : type === 'image' ? (
        <div
          style={{
            borderWidth: content.border,
            borderColor: content.borderColor,
          }}
        >
          <img
            src={content.path}
            alt=""
            width={(content.size * canvas.background.width) / 100}
            draggable="false"
            style={{
              maxHeight: canvas.background.height,
              maxWidth: canvas.background.width,
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Element;
