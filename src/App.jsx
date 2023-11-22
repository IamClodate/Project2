import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
          <Navbar/>
    </div>
  );
}