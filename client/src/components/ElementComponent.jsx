import React from 'react';

function Element({ type, content }) {
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
      ) : (
        <></>
      )}
    </div>
  );
}

export default Element;
