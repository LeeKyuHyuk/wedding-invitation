import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Title from './Components/Title';
import Gretting from './Components/Greeting';
import Gallery from './Components/Gallery';
import Location from './Components/Location';
import CongratulatoryMoney from './Components/CongratulatoryMoney';
import Share from './Components/Share';
import GroovePaper from './Assets/GroovePaper.png';

const { Footer } = Layout;

const App = () => {
  return (
    <>
      <Title />
      <Gretting />
      <Gallery />
      <Location />
      <CongratulatoryMoney />
      <Share />
      <Footer
        style={{
          background: '#D7CCC8',
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: 'center',
        }}
      >
        Copyright © 2021 KyuHyuk Lee
      </Footer>
    </>
  );
};

export default App;
