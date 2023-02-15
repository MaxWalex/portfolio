// import { BrowserRouter as Router, Route ,Link, Routes } from "react-router-dom";

import MouseContextProvider from '../../context/MouseContext';
import FullPageScroll from '../fullPageScroll/FullPageScroll';

import './App.scss';

function App() {

  return (
    <MouseContextProvider>
      <FullPageScroll />
    </MouseContextProvider>
  );
}

export default App;
