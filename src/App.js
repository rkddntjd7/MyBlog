import React from 'react';
import { FcAlarmClock, FcBusinessman, FcApprove } from "react-icons/fc"; // 아이콘 import 하기전에 icon설치 터미널에서 (npm install react-icons --save)
import Header from "./component/head/Header";
import "./App.css";
import Hero from './component/Hero/Hero';
import Features from './component/features/Features';
import Portfolio from './component/portfolio/Portfolio';


const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Portfolio />
    </>
  );
};

export default App;