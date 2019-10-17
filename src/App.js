import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Routes from './Components/Routes';
import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <div style={styles.div}>
     <Routes/>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
const styles={
  div:{
    marginTop:50,
  }
}