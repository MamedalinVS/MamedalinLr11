import React from 'react';
import Block from './Block';
import './App.css';
import image1 from './images/pizza.jpg';

const App = () => {
  return (
    <div className="main-container">
      <h1>Что хотите заказать?</h1>
      <div className="block-wrapper">
        <Block
          title="Пепперони"
          description="Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла"
          image={image1}
          price="от 550₽"
          isSeasonHit={true}
        />
        
      </div>
    </div>
  );
};

export default App;
