import React,{useState} from 'react'

export default function TextArea(props) {

    const[text,setText] = useState('');

    const handleUpClick=(event)=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleTextChange = (event)=>{
        
        setText(event.target.value);
    }

  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" placeholder = "Enter text here" value={text} onChange={handleTextChange} id="exampleFormControlTextarea1" rows="8" ></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpClick}> Convert To Uppercase</button>
    </div>
  )
}
