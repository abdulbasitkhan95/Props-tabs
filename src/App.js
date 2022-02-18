import './App.css';
import Button from "./components/Button";
import Dashboard from "./views/Dashboard";
import Home from "./views/Home";
import {useState} from 'react';

function App() {

    const [screen, setScreen] = useState('Home')

    const changeScreen = (currentScreen) => {
        setScreen(currentScreen)
    }

  return (
    <div className="App">
      <Button title="Home" onClick={changeScreen} />
      <Button title="Dashboard" onClick={changeScreen} />

      {screen === 'Home' && <Home/> }
      {screen === 'Dashboard' && <Dashboard/> }
    </div>
  );
}

export default App;
