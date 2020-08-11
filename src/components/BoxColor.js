import React from 'react';

export const BoxColor = (props) => {
  const { r, g, b } = props;
  var redColor = r;
  var greenColor = g;
  var blueColor = b;

  var fullColor = `rgb(${r},${g},${b})`;
  //   var fullColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  console.log(fullColor);

  return (
    <div style={{ backgroundColor: fullColor }}>
      La couleur est rgb({redColor},{greenColor},{blueColor})
    </div>
  );
};

export default BoxColor;
