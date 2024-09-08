import React from "react";

function Square({ number, handleClick, value }) {
  return (
    <button 
    className={"square"} 
    onClick={() => handleClick(number)}>
        {value ? value : "" }
    </button>
  );
}

export default Square;
