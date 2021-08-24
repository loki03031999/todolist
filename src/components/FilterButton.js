import React from "react";

export default function FilterButton(props){
    return (
        <button 
            type="button" 
            className="btn toggle-btn" 
            aria-pressed="true" 
            onClick={() => alert("Why did you press the button? Dont Do That")}
        >
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
    );
}