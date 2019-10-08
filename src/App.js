import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Weather from './Pages/Weather';
function App() {
  return (
    <div className="App">
      <Header/>
      <div style={styles.div}>
      <Weather/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
const styles={
  div:{
    marginTop:50,
  }
}