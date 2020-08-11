import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

function App() {
  return (
    <div className="App">
      <h2>Id Card</h2>
      <IdCard
        picture="https://randomuser.me/api/portraits/men/44.jpg"
        fname="John"
        lname="Doe"
        gender="male"
        height={1.78}
        birth="Tue Jul 14 1992"
      />

      <IdCard
        picture="https://randomuser.me/api/portraits/women/8.jpg"
        fname="Obrien"
        lname="Delores"
        gender="female"
        height={1.72}
        birth="Tue May 11 1993"
      />

      <h2>Greetings</h2>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>

      <h2>Random</h2>

      <Random min={1} max={6} />
      <Random min={1} max={100} />

      <h2>BoxColor</h2>
      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

      <h2>CreditCard</h2>

      <h2>Rating</h2>

      <h2>DriverCard</h2>

      <h2>ClickablePicture</h2>

      <h2>Dice</h2>

      <h2>Carousel</h2>

      <h2>NumbersTable</h2>
    </div>
  );
}

export default App;
