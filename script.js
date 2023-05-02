import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';

// console.log("react", React);
// console.log("reactDom", createRoot);
// const hd = <h1> hey boys</h1>;
const heading = React.createElement(
    "h1",
    { id: "some", class: "koiclass" },
    "hey boys"
);
const heading2 = React.createElement("h1", {}, "hey boi");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.info("heading", heading);
root.render(heading2);