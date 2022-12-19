import React, { useState } from 'react'

export default function Textform(props) {
    const handleupcase=()=>{
        // console.log("Uppercase button is clicked"+text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showalert("Converted to upper case","success")
    }
    const handleonchange=(event)=>{
        // console.log("handling onchange")
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter text here");
    return (
        <> 
        {/* /* jsx fragment */ }
        <div className="container" style={{color:props.mode === "light" ? "black":"white"}}>
        <div className='container'>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode === "light" ? "white":"grey", color:props.mode === "light" ? "black":"white"} } onChange={handleonchange}
                 id="my-box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleupcase}>Convert to uppercase</button>
        </div>
        <div className="container my-3" >
            <h1>Text Summary</h1>
            <p>{text.split(" ").length} word and {text.length} characters</p>
        </div>
        </div>
        
        </>
        

    )
}
