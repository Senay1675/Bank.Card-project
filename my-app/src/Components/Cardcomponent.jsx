// CardComponent.jsx
import React from 'react';
import './CardStyling.css'; // Importera stylingen

const issuerColors = {
    Visa: '#1A1F71', // Visa-färg
    Mastercard: '#EB001B', // Mastercard-färg
    'American Express': '#0072B1', // American Express-färg
    // Lägg till fler om du har andra utgivare
};

const CardComponent = ({ card }) => {
    
    return (
        <div className="card" style={{backgroundColor: issuerColors[card.issuer]}}>
            <div className="card-header">
                {card.cardName}
            </div>
            <div className="card-body">
                <p className="card-details">Card Number: {card.cardNumber}</p>
                <p className="card-details">Expires: {card.month}/{card.year}</p>
            </div>
            <img 
                src={`/assets/logos/${card.issuer}.png`} 
                alt={`${card.issuer} logo`} 
                className="card-logo" 
            />
        </div>
    );
};

export default CardComponent;
