import React from 'react';

const Greetings = (props) => {
  var langue = {
    de: 'Hallo ',
    en: 'Hello ',
    es: 'Hola',
    fr: 'Bonjour ',
  };

  var myLanguage;

  if (
    props.lang === 'de' ||
    props.lang === 'en' ||
    props.lang === 'es' ||
    props.lang === 'fr'
  ) {
    myLanguage = langue[props.lang];
  }
  return (
    <div className="greetings">
      {myLanguage}
      {props.children}
    </div>
  );
};

export default Greetings;
