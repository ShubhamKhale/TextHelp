import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const[mode, setMode] = useState('light');
  const[modeName, setModeName] = useState('Dark');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message, 
      type: type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      setModeName('light');
      document.body.style.backgroundColor = 'rgb(16 21 67)';
      showAlert("Dark mode has been enable", "success");
    }
    else{
      setMode('light');
      setModeName('Dark');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");
    }
  };

  

  return (
    <>
    <Router>
      <Navbar title="TextHelp" aboutText="AboutTextHelp" mode={mode} toggleMode={toggleMode} modeName={modeName}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About />} mode={mode}></Route>
          <Route path="/" element={<Textform showAlert={showAlert} heading="Try TextHelp - Word Counter, Character Counter, Remove extra spaces" mode={mode} />}></Route>
      </Routes>
      </div>
    </Router>
    
    </>
  );
}

export default App;
