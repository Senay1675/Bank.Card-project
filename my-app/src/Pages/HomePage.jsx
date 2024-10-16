// import React from 'react';

// const HomePage = ({ cards }) => {
//     return (
//         <div>
//             <h1>Your Card Collection</h1>
//             {cards.length > 0 ? (
//                 cards.map((card, index) => (
//                     <div key={index} style={{ border: "1px solid black", padding: "10px", marginBottom: "20px", backgroundColor: card.issuer === "Visa" ? "blue" : card.issuer === "Mastercard" ? "orange" : "lightgray" }}>
//                         <p>Issuer: {card.issuer}</p>
//                         <p>Card Number: {card.cardNumber}</p>
//                         <p>Card Holder: {card.cardName}</p>
//                         <p>Valid Thru: {card.month}/{card.year}</p>
//                         <p>CCV: {card.ccv}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>No cards available.</p>
//             )}
//         </div>
//     );
// };

// export default HomePage;


import { Link } from 'react-router-dom';
import CardComponent from '../Components/Cardcomponent';

const HomePage = ({ cards, toggleActiveStatus }) => {
    return (
        <div>
            <h1>Active Card</h1>
            {cards.filter(card => card.isActive).map(card => (
                <div key={card.cardNumber}>
                    <CardComponent card={card} /> 
                </div>
            ))}

            <h1>Inactive Cards</h1>
            {cards.filter(card => !card.isActive).map(card => (
                <div key={card.cardNumber}>
                    <CardComponent card={card} /> 
                    <Link to={`/card/${card.cardNumber}`}>
                        View/Edit Card
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default HomePage