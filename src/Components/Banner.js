import React from 'react'

export const Banner = (props) => {
  const bannerStyle={
    backgroundColor:props.backgroundColor,
    width:`${props.width}px`,
    height:`${props.height}px`,
    fontSize: `${props.fontSize}px`,
    color:props.fontColor,
    backgroundImage: props.imageUrl ? `url(${props.imageUrl})` : '',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
  return (
    <div className="banner-container">
    <div className="banner" style={bannerStyle}>
      <div className="bannercontent">
      <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
        
    </div>
    </div>
  )
}
