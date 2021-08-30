import React from 'react';
import { Card, Layout } from 'antd';
import Title from './Components/Title';
import Gretting from './Components/Greeting';
import Gallery from './Components/Gallery';
import Location from './Components/Location';
import CongratulatoryMoney from './Components/CongratulatoryMoney';
import Share from './Components/Share';
import './App.css';

const { Content, Footer } = Layout;

const App = () => {
  return (
    <>
      <Layout>
        <Content style={{ textAlign: 'center' }}>
          <Card
            style={{
              display: 'inline-block',
              width: '96%',
              marginTop: '2%',
              textAlign: 'left',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Title />
            <Gretting />
            <Gallery />
            <Location />
            <CongratulatoryMoney />
            <Share />
          </Card>
          <Footer>Copyright © 2021 KyuHyuk Lee</Footer>
        </Content>
      </Layout>
    </>
  );
};

export default App;
