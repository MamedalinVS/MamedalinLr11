import React, { useState, useEffect } from 'react';
import './Block.css';
import cartIcon from './images/cart.png';

const Block = ({ title, description, image, price, isSeasonHit }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedDiameter, setSelectedDiameter] = useState('');
  const [finalPrice, setFinalPrice] = useState(Number(price.replace(/[^\d.-]/g, '')));

  useEffect(() => {
    let updatedPrice = Number(price.replace(/[^\d.-]/g, ''));

  
    if (title === 'Пепперони' && selectedDiameter) {
      if (selectedDiameter === '25 см') updatedPrice += 0;
      if (selectedDiameter === '30 см') updatedPrice += 50;
      if (selectedDiameter === '35 см') updatedPrice += 100;
    }

    setFinalPrice(updatedPrice);
  }, [selectedDiameter, price, title]);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    if (value >= 1 && value <= 999) {
      setQuantity(Number(value));
    }
  };

  const handleDiameterChange = (event) => {
    setSelectedDiameter(event.target.value);
  };

  const displayPrice = () => {
    let priceToDisplay = finalPrice;
    priceToDisplay *= quantity;

    if (title === "Пепперони" && !selectedDiameter) {
      return `от ${priceToDisplay}₽`;  
    }
    return `${priceToDisplay}₽`;  
  };

  return (
    <div className="block">
      {isSeasonHit && <div className="block-header">Хит сезона</div>}
      <img src={image} alt={title} className="block-image" />
      <h3 className="block-title">{title}</h3>
      <p className="block-description">{description}</p>
      <div className="block-price">{displayPrice()}</div>
      
      {title === "Пепперони" && (
        <div className="block-diameter-container">
          <select className="block-diameter" onChange={handleDiameterChange} value={selectedDiameter}>
            <option value="">Диаметр</option>
            <option value="25 см">25 см</option>
            <option value="30 см">30 см</option>
            <option value="35 см">35 см</option>
          </select>
        </div>
      )}

      <div className="block-actions">
        <div className="block-quantity">
          <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
          <input
            type="number"
            className="quantity-input"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            max="999"
          />
          <button className="quantity-btn" onClick={increaseQuantity}>+</button>
        </div>
        <button className="buy-btn">
          <img src={cartIcon} alt="Корзина" className="cart-icon" />
        </button>
      </div>
    </div>
  );
};

export default Block;
