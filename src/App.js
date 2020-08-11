import React from 'react';
import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';

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
    </div>
  );
}

export default App;
