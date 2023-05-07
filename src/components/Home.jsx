import React from 'react';
import styled from 'styled-components';
import Section from './Section';

export default function Home() {
  return (
    <Container>
      <Section
        title='Model 3'
        subtitle='View Inventory'
        backgroundImg='model-3.jpg'
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title='Model Y'
        subtitle='View Inventory'
        backgroundImg='model-y.jpg'
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title='Model S'
        subtitle='View Inventory'
        backgroundImg='model-s.jpg'
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title='Model X'
        subtitle='View Inventory'
        backgroundImg='model-x.jpg'
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title='Solar Panels'
        subtitle='Lowest Cost Solar Panels in America'
        backgroundImg='solar-panel.jpg'
        leftBtnText="Order Now"
        rightBtnText="Demo Drive"
      />
      <Section
        title='Solar Panels'
        subtitle=''
        backgroundImg='accessories.jpg'
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
`;
