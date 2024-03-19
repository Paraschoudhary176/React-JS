import React from "react";
import { createRoot,ReactDOM } from "react-dom/client";

// JSX (transpilled before it reaches the JS) - PARCEL - Babel

const JsxHeading = <h1>It is JSX Heading</h1>;

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(JsxHeading);
