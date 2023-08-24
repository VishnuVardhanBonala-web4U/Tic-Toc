import { useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import Scorecheck from "./components/Scoreboard/Scorecheck";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [box, setbox] = useState(Array(9).fill(null));  //initially empty

  const [xisplaying, setxisplaying] = useState(true);
 const [xscore,setxscore]=useState(0)
 const [oscore,setoscore]=useState(0)
 const [gameover,setgameover]=useState(false)
 const [tie,settie]=useState(0)

  const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const handleClick = (boxid) => {
    const updatedboard = box.map((value, id) => {
      if (id === boxid) {
        return xisplaying === true ? "X" : "O";
      } else {
        return value;
      }

    });

    setbox(updatedboard);
    setxisplaying(!xisplaying);
    const winner=checkwinner(updatedboard);
    if(winner){
      if(winner==="X"){
        setxscore(xscore+1)
      setgameover(true)


      }
      else{
        setoscore(oscore+1)
      setgameover(true)

      }
    }

    let filled=true;
    updatedboard.map((box)=>{
      if(box===null){
        filled=false;
      }
    })
      
     
  

    if(filled&&winner!=="X" && winner!=="O"){
      filled=true
      settie(tie+1)

    }

  };

  const checkwinner = (updatedboard) => {
    for (let i = 0; i < conditions.length; i++) {
      const [x, y, z] = conditions[i]; //0,1,2

      if (
        updatedboard[x] &&
        updatedboard[x] === updatedboard[y] &&
        updatedboard[y] === updatedboard[z] &&
        updatedboard[z]
      ) {
 return updatedboard[x]
      }
      
    }

    
  };


  const reset=()=>{
    setgameover(false)
    setbox(Array(9).fill(null))
  }

  const restartgame=()=>{
    setgameover(false)
    setbox(Array(9).fill(null))
    setoscore(0)
    setxscore(0)
    settie(0)
  }
  return (
    <>
    <Header/>

      <Scorecheck xscore={xscore} oscore={oscore}  playing={xisplaying} tie={tie}/>
      
      <Board board={box} onClick={gameover===true?reset:handleClick} />

<div className="button-footer">
<button className="reset" onClick={reset}>Reset Game</button>
<button className="restart"  onClick={restartgame}>Restart</button>


  
  </div> 
<Footer/>
     </>
  );
}

export default App;
