import React from 'react';

function Color({ color, height, width }) {
  return (
    <div
      style={{
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid',
        padding: 2,
        borderRadius: 7,
      }}
    >
      <div
        style={{
          height: height ? height : 25,
          width: width ? width : 50,
          borderWidth: 1,
          borderColor: 'black',
          borderStyle: 'solid',
          backgroundColor: color,
          borderRadius: 5,
          flexShrink: 0,
        }}
      />
    </div>
  );
}

export default Color;
