// import React from "react";
// import { useState } from "react";
// import { useLocation, useParams } from "react-router-dom";

// let Card = ({ cards }) => {

//     const { id } = useParams();
//     const card = cards.find(c => c.cardNumber === id);

//     return(
//         <>
//         <h1>Card</h1>
//         <h1>{card.cardName}</h1>
//         </>
//     )
// }

// export default Card

import { useParams } from 'react-router-dom';
import CardComponent from '../Components/Cardcomponent';

const CardDetails = ({ cards, toggleActiveStatus, deleteCard }) => {
    const { id } = useParams(); // Hämta id från URL:en
    const card = cards.find(c => c.cardNumber === id); // Hitta kortet med det specifika ID:t

    if (!card) {
        return <p>Card not found</p>; // Om inget kort hittas
    }

    return (
        <div>
           <CardComponent card={card} /> 

            {!card.isActive && (
                <>
                    <button onClick={() => toggleActiveStatus(card.cardNumber)}>
                        Activate
                    </button>
                    <button onClick={() => deleteCard(card.cardNumber)}>
                        Delete Card
                    </button>
                </>
            )}
        </div>
    );
};

export default CardDetails;

