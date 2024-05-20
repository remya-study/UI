import React from "react";
import { TbTextColor } from "react-icons/tb";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
         
          "Nile drives a smarter approach by integrating with other tools for improving  productivity.",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        
      }}
    />
  );
}

export default Type;
