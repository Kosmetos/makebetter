import './App.css';
import { useState } from "react"
import Switcher from './Components/Switcher';
import HS from './Components/HS';

function App() {
  const [toggled, setToggled] = useState(false)
  return (

    <div className={`AppBody ${toggled ? "better-mood" : ""}`}>
      <div className={`App ${toggled ? "wider" : ""}`}>
        <HS toggled={toggled}/>
        <Switcher toggled={toggled} setToggled={setToggled}/>
        {!toggled ? <p>Сделать всё хорошо</p> : <p>Ожидайте</p>}
      </div>
    </div>

    
  );
}

export default App;
