import React from 'react';

const IdCard = (props) => {
  const { picture, fname, lname, gender, height, birth } = props;

  return (
    <div className="idCard">
      <img style={{ height: 150 }} src={picture} alt="Picture" />
      <div className="infoUser">
        <p>
          <strong>First name: </strong>
          {fname}
        </p>

        <p>
          <strong>Last name: </strong>
          {lname}
        </p>

        <p>
          <strong>Gender: </strong>
          {gender}
        </p>

        <p>
          <strong>Height: </strong>
          {height} m
        </p>

        <p>
          <strong>Birth: </strong>
          {birth}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
