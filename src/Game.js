import React from 'react';
import './index.css';

//Importando el componente tablero (Board)
import Board from './Board';
class Game extends React.Component {
     render () {
       return (
         <div className="game">
           <div className="game-board">
             <Board/>
           </div>
           <div className="game-info">
             <div>{/* status */}</div>
             <ol>{/* TODO */}</ol>
           </div>
         </div>
        );
    }
}
export default Game;