/*
Creator:Simanye M
Github: SBTheDev
*/

import './App.css';
import {Banner} from './Components/Banner';
import { BannerInput } from './Components/BannerInput';
import { AppButtons } from './Components/AppButtons';
import {useState} from 'react';
import Axios from 'axios';
function App() {
  const AppTitle="Banner Generator";
  const SubTitle="Create your github banner";
  const Credit="Created by Simathedev"

  const [backgroundColor, setBackgroundColor] = useState('#f0f8ff');
  const [bannerText, setBannerText] = useState({ title: "[Heading]", description: "[Subtitle]" });
  const[fontSize,setFontSize]=useState(24);
  const[fontColor,setFontColor]=useState('#000000');
  const[bannerSize,setBannerSize]=useState({});
  const [imageUrl, setImageUrl] = useState('');

  const fetchImage = () => {
    const accessKey = "akm_z2cHIco5Lk9OdkSjdcvQZTV8HxjIaqmh2UEFwoo";
    const query = "nature"; // You can replace this with your own search term
    Axios
      .get(`https://api.unsplash.com/photos/random/?client_id=${accessKey}&query=${query}`)
      .then((response) => {
        console.log(response.data.urls.regular);
        setImageUrl(response.data.urls.regular);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateBanner = (text) => {
    setBannerText(text);
  };
const updateBannerSize=(bannersize) => {
  setBannerSize(bannersize);
};
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
    setImageUrl('');
  };
  const changeFontSize=(size)=>{
    setFontSize(size);
  }
  const changeFontColor=(fontcolor)=>{
    setFontColor(fontcolor)
  }
  const changeBackgroundImage=(image)=>{
    setImageUrl(image)
  }
  return (
    <div className="App">
      <header>
        <h1>{AppTitle}</h1>
        <p>{SubTitle}</p>
      </header> 
     
      <Banner 
      backgroundColor={backgroundColor} 
      title={bannerText.title} 
      description={bannerText.description} 
      fontSize={fontSize} 
      fontColor={fontColor} 
      width={bannerSize.width} 
      height={bannerSize.height} 
      imageUrl={imageUrl}/>
      <BannerInput updateBanner={updateBanner} updateBannerSize={updateBannerSize}/>
      <AppButtons changeBackgroundColor={changeBackgroundColor} 
      changeFontSize={changeFontSize} 
      changeFontColor={changeFontColor} 
      changeBackgroundImage={changeBackgroundImage}
      fetchImage={fetchImage}
      />
     
    <footer>
      <p>{Credit}</p>
    </footer>
    </div>
  );
}

export default App;
