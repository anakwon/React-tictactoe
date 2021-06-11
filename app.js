import "./styles.css";
import React, {useState} from 'react';

const Square = ({value, onClick}) => (
  <button className="square" onClick={onClick}>{value}</button>
)

const victoryCalc = (Square) => {
  const row = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]; 
}



export default function App() {
  const [board, setBoard] = useState(Array(9));
  //const []

  return (
    <div className="App">
      <div>
      <Square value="1" onClick={() => onClick("dummy value")} />
      <Square value="2" onClick={() => onClick("dummy value")} />
      <Square value="3" onClick={() => onClick("dummy value")} />
      </div>
      <div>
      <Square value="4" onClick={() => onClick("dummy value")} />
      <Square value="5" onClick={() => onClick("dummy value")} />
      <Square value="6" onClick={() => onClick("dummy value")} />
      </div>
      <div>
      <Square value="7" onClick={() => onClick("dummy value")} />
      <Square value="8" onClick={() => onClick("dummy value")} />
      <Square value="9" onClick={() => onClick("dummy value")} />
      </div>
    
    </div>
  );
}
