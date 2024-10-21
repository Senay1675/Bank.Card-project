// CardComponent.jsx
import React from 'react';
import './CardStyling.css'; 






const CardComponent = ({ card }) => {


    const formatCardNumber = (number) => {
        return number.replace(/(\d{4})(?=\d)/g, "$1 "); // Lägger till ett mellanslag efter varje 4 siffror
    };
    const issuerGradients = {
        Visa: 'linear-gradient(135deg, #1A1F71 0%, #2A3DA5 100%)',  
        Mastercard: 'linear-gradient(135deg, #EB001B 0%, #F79E1B 100%)',
        'American Express': 'linear-gradient(135deg, #0072B1 0%, #00AEEF 100%)', 
        
    };
    const issuerLogo = `./Logos`;
    return (
        <div className="card" style={{backgroundImage: issuerGradients[card.issuer]}}>
                <p className="card-details">Card Number:</p>
            <div className="card-header">
                <p>{formatCardNumber(card.cardNumber)}</p>
            </div>
            <div className="card-body">
                <p className='card-details'>{card.cardName}</p>
                <p className="card-details">Expires: {card.month}/{card.year}</p>
            </div>
            <img 
                src={`/public/Logos/${card.issuer}.png`} 
                alt={`${card.issuer} logo`} 
                className="card-logo" 
            />
        </div>
    );
};

export default CardComponent;
