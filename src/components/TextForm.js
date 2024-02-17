import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("uppercase uas clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLoClick =()=>{
        // console.log("uppercase uas clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleCleanClick =()=>{
        console.log("uppercase uas clicked"+ text);
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!","success");
    }
    const handleonchange =(event)=>{
      console.log("on change");
      setText(event.target.value);
    }
    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard!","success");
    }
    const handleExtraSpaces =()=>{
        let newText =text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert("Extra spaces Removed!","success");
    }
    const [text, setText] = useState('');

  return (
      <>
    <div className="container"style={{color: props.mode ==='dark'?'white':'#31366f'}}>
    
        <h1> {props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control"value={text} onChange={handleonchange} style={{backgroundColor: props.mode ==='dark'?'#4853d8':'white',color:props.mode ==='dark'?'white':'#31366f'}} id="myBox" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>convert to upper Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>convert to Lower Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCleanClick}>Clean Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extrs spaces</button>
    </div>
    <div className="container my-3"style={{color: props.mode ==='dark'?'white':'#31366f'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>

    </>
  );
}