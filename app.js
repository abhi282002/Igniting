import React from "react";
import  ReactDOM  from "react-dom/client";

 const root = ReactDOM.createRoot(document.querySelector(".root"));

const parent = React.createElement("div",
{id:"parent"},[
React.createElement("div",
{id:"child"},
[React.createElement("h1",{},"Hi i'm h1 tag"),
React.createElement("h2",{},"Hi i'm h2 tag")
]),
React.createElement("div",
{id:"child"},
[React.createElement("h1",{},"Hi i'm h1 tag"),
React.createElement("h2",{},"Hi i'm h2 tag")])
]
);
root.render(parent);//here react element or js object create the all tag that browser understand and put inside to root

