import React,{useState} from 'react';
import html2canvas from 'html2canvas';



export const AppButtons = (props) => {
  const [showColorInput, setShowColorInput] = useState(false);
  const[selectedColor,setSelectedColor]=useState('#ffffff');
  const[fontSize,setFontSize]=useState(24);
  const[fontColor,setFontColor]=useState('#000000');
  const [errorMessage, setErrorMessage] = useState("");

   const handleColorChange=(event)=>{
    setSelectedColor(event.target.value);
    setShowColorInput(false);
   };
const handlefontSizeChange=(event)=>{
  if (event.target.value >= 16 && event.target.value <= 33) {
  setFontSize(event.target.value)
  setErrorMessage("");
  }
  else{
    setErrorMessage("Width must be between 16 and 33");
  }
  props.updateBanner({ fontSize: event.target.value });
}
const handlefontColorChange=(event)=>{
  setFontColor(event.target.value)

}
function handleSaveBanner() {
  const bannerElement = document.querySelector(".banner");
  html2canvas(bannerElement,{ useCORS: true }).then(function(canvas) {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = "banner.png";
    link.href = image;
    link.click();
  });
}
    return (
    <div className="App_Buttons">
       {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <input type="color" value={selectedColor} onChange={handleColorChange}/>
        <button onClick={()=>props.changeBackgroundColor(selectedColor)}>Background Color</button>
        <input type="number" value={fontSize} onChange={handlefontSizeChange} min="16" max="33"/>
        <button onClick={()=>props.changeFontSize(fontSize)}>Font size</button>
        <input type="color" value={fontColor} onChange={handlefontColorChange}/>
        <button onClick={()=>props.changeFontColor(fontColor)}>Font color</button>
        <button onClick={props.fetchImage}>Add Image</button>
        <button onClick={handleSaveBanner}>Save Banner</button>
    </div>
  )
}
