  import Navbar from "./components/navbar/Navbar"
  import MainPage from "./components/main_part/MainPage";
  import Line from "./components/linke_with_logos/Line";
  import React, { useState } from 'react';
import Footer from "./components/footer/Footer";
  const appStyle = {
    width:'100%'
  }
  const App = () => {

    return (
      <div style={appStyle}>
        <Navbar/>
        <MainPage/>
        <Line/>
        <Footer/>
      </div>
    );
  };

  export default App;