import React from "react";
import memesData from "../memesData";

export default function Form() {
  const [meme, setMeme] = React.useState([
    {
      topText: "topText",
      bottomText: "bottomText",
      randomImage: "https://i.imgflip.com/261o3j.jpg",
    },
  ]);

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <div className="form">
      <div className="form--section">
        <input placeholder="Shut up"></input>
        <input placeholder="and take my money"></input>
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <img src={meme.randomImage} className="meme_image" />
    </div>
  );
}
