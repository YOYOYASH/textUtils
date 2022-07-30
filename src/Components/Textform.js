import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter Your Text Here!!!");
  const handleUpperCase = () => {
    //console.log("Upper Case function called "+text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlefirstLetter = () => {
    //console.log("Upper Case function called "+text);
    let CapitalizeWords = text[0].toUpperCase();  
        for (let i = 1; i <= text.length - 1; i++) {  
            let currentCharacter,  previousCharacter = text[i - 1];  
            if (previousCharacter && previousCharacter === ' ') {  
                currentCharacter = text[i].toUpperCase();  
            } else {  
                currentCharacter = text[i];  
            }  
            CapitalizeWords = CapitalizeWords + currentCharacter;  
        }  
        setText(CapitalizeWords);
  };
  const handleChange = (event) => {
    // console.log("Onchange function");
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <div className="form-group">
          <h2 style={{color:(props.mode === 'light')?'black':'white'}}>{props.heading}</h2>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleChange}
            rows="8"
            style={{backgroundColor:props.mode === 'light'?'white':'grey',color:props.mode === 'light'?'black':'white'}}
          ></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpperCase}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary my-3 mx-3" onClick={handlefirstLetter}>
          First Letter To Uppercase
        </button>
      </div>
      <div className="container" style={{color:(props.mode === 'light')?'black':'white'}}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} letters</p>
      </div>
      
    </>
  );
}
