import React from 'react'
import {useState} from 'react';

export const BannerInput = (props) => {
    
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bannerWidth,setBannerWidth]=useState(1000);
  const [bannerHeight,setBannerHeight]=useState(400);
  const [errorMessage, setErrorMessage] = useState("");
/*const addTitle=(event)=>{
setTitle(event.target.value);
}
const addDescription=(event)=>{
setDescription(event.target.value);
}*/
const updateTitle = (e) => {
  setTitle(e.target.value);
  props.updateBanner({ title: e.target.value, description });
};

const updateDescription = (e) => {
  setDescription(e.target.value);
  props.updateBanner({ title, description: e.target.value });
};


const updateBannerWidth = (e) => {
if (e.target.value >= 600 && e.target.value <= 1000) {
 setBannerWidth(e.target.value);
setErrorMessage("");
props.updateBannerSize({ width: e.target.value});
}

 else{
  setErrorMessage("Width must be between 600 and 1000 pixels");
 }
  
};
const updateBannerHeight = (e) => {
 if (e.target.value >= 300 && e.target.value <= 500) {
  setBannerHeight(e.target.value);
 setErrorMessage("");
 props.updateBannerSize({ height: e.target.value});
 }
  else{
    setErrorMessage("Height must be between 300 and 500 pixels");
  }
  
};


  return (
    <div className="BannerInput">
       {errorMessage&&<p style={{ color: 'red' }}>{errorMessage}</p>}
    <label htmlFor='title'>Title: </label><input type="text" name='title' placeholder="enter title here" value={title} onChange={updateTitle}/>
    <br/>
    <label htmlFor='description'>Description: </label><input type="text" name='description' placeholder="enter description here" value={description} onChange={updateDescription}/>
    <br/>
    <label htmlFor='widthInput'>Width: </label><input type="number" name='widthInput' value={bannerWidth} placeholder="e.g., 800" onChange={updateBannerWidth} min="600" step="100" max="1000" /> 
    <label htmlFor='heightInput'>Height: </label><input type="number" name='heightInput' value={bannerHeight} placeholder="e.g., 400" onChange={updateBannerHeight} min="300" step="10" max="450"/>
    </div>
  )
}
