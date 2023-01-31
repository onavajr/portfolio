import React from 'react';
import PersonForm from './components/PersonForm';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Projects from './views/Projects';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Portfolio</h1>
      <Navbar/>
      <MainContent/>
      <PersonForm/>
      <Projects/>

    </div>
  );
}


export default App;
