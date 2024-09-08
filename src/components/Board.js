import React, { useState, useEffect } from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  const [newArr, setNewArray] = useState([]);

   useEffect(()=> {
     var tmp = [];
     for(var i = 0; i < squares.length; i += 3) {
        tmp.push(squares.slice(i, i + 3));
     }
     setNewArray([...tmp])
   },[squares])
  
  return (
     <div className="board">
         { newArr.map((i,indexI)=>
             <div key={indexI*3} className="board-row">
               {
                 i.map((j,indexJ) =>
                  <Square 
                    key={indexI*3 + indexJ} 
                    handleClick={handleClick} 
                    number={indexI*3 + indexJ} 
                    value={squares[indexI*3 + indexJ]}
                  />
                )
               }
             </div>
           )
         }
        </div>
  );
}
        
      
    