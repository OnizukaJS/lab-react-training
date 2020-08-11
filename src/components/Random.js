import React from 'react';

export const Random = (props) => {
  const { min, max } = props;
  const randomNum = Math.floor(Math.random() * Number(max));

  return (
    <div className="random">
      Random value between {min} et {max} = {randomNum}
    </div>
  );
};

export default Random;
