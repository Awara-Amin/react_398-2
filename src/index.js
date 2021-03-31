import React from "react";
import ReactDOM from "react-dom";

const imagelink = "https://picsum.photos/200";

// 398v adding CSS
ReactDOM.render(
  <div>
    {/* that is how class is added . Here we say className and other class es LOVEEEE*/}
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li contentEditable="true">Bacon</li>
      <li className="heading">Jamon</li>
      <li>Noodles</li>
    </ul>

    <h2 className="heading" contentEditable="true" spellCheck="false">
      {" "}
      My Favourate Birds also is;
    </h2>

    {/*  now adding images and editing them using CSS*/}
    <img
      className="food-img"
      src="http://lh3.ggpht.com/_1wtadqGaaPs/TAEHlxz2OBI/AAAAAAAABTw/_P7ZIKdrH5c/tmp37114_thumb_thumb%5B1%5D.jpg?imgmax=800"
      alt="first"
    />
    <img
      className="food-img"
      src="https://ichef.bbci.co.uk/news/976/cpsprodpb/64BC/production/_99888752_gettyimages-607743716.jpg"
      alt="Second"
    />
    <img
      className="food-img"
      alt="third"
      src="https://i.pinimg.com/originals/da/00/84/da008498450f44b493c5a2853a9b78bd.jpg"
    />

    <p> kaka, here we can add photos through a link see the variable above </p>
    {/* or we can add images like that + and make them gray if you wanted*/}
    <img src={imagelink + "?grayscale"}></img>
  </div>,
  document.getElementById("root")
);
