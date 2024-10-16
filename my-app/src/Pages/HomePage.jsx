// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const HomePage = ({}) => {
//     const location = useLocation();
//     const newCard = location.state?.newCard; // Få tillgång till skickad kortdata

//     return (
//         <div>
//             <h1>Your Card Collection</h1>
//             {newCard ? (
//                 <div style={{ border: "1px solid black", padding: "10px", marginBottom: "20px", backgroundColor: newCard.issuer === "Visa" ? "blue" : newCard.issuer === "Mastercard" ? "orange" : "lightgray" }}>
//                     <p>Issuer: {newCard.issuer}</p>
//                     <p>Card Number: {newCard.cardNumber}</p>
//                     <p>Card Holder: {newCard.cardName}</p>
//                     <p>Valid Thru: {newCard.month}/{newCard.year}</p>
//                     <p>CCV: {newCard.ccv}</p>
//                 </div>
//             ) : (
//                 <p>No card data available.</p>
//             )}
//         </div>
//     );
// };

// export default HomePage;
 
import React from 'react';

const HomePage = ({ cards }) => {
    return (
        <div>
            <h1>Your Card Collection</h1>
            {cards.length > 0 ? (
                cards.map((card, index) => (
                    <div key={index} style={{ border: "1px solid black", padding: "10px", marginBottom: "20px", backgroundColor: card.issuer === "Visa" ? "blue" : card.issuer === "Mastercard" ? "orange" : "lightgray" }}>
                        <p>Issuer: {card.issuer}</p>
                        <p>Card Number: {card.cardNumber}</p>
                        <p>Card Holder: {card.cardName}</p>
                        <p>Valid Thru: {card.month}/{card.year}</p>
                        <p>CCV: {card.ccv}</p>
                    </div>
                ))
            ) : (
                <p>No cards available.</p>
            )}
        </div>
    );
};

export default HomePage;
