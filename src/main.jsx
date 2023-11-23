import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import './index.css'
import { StrictMode } from "react";
import { CreateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


