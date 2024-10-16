// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";



// const AddCard = () => {
//     const[cardNumber, setCardNumber] = useState();
//     const[cardName, setCardName] = useState();
//     const[month, setMonth] = useState();
//     const[year, setYear] = useState();
//     const[ccv, setCvv] = useState();
//     const [issuer, setIssuer] = useState("Visa"); // Default issuer
//     const [errors, setErrors] = useState({});

//     const navigate = useNavigate()

//      // Validation function
//   const validate = () => {
//     let errors = {};

//     // Card Number Validation
//     if (cardNumber.length !== 16 || isNaN(cardNumber)) {
//       errors.cardNumber = "Card number must be 16 digits.";
//     }

//     // Card Holder Name Validation
//     if (!/^[a-zA-Z\s]+$/.test(cardName)) {
//       errors.cardName = "Name cannot contain numbers.";
//     }

//     // Expiration Date Validation
//     const currentYear = new Date().getFullYear() % 100;
//     const currentMonth = new Date().getMonth() + 1;
//     if (year < currentYear || (year == currentYear && month < currentMonth)) {
//       errors.date = "Expiration date is invalid.";
//     }

//     return errors;
// }

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
    
//       console.log("Form submitted successfully!");
//       if (Object.keys(validationErrors).length === 0) {
//         const newCard = { cardNumber, cardName, month, year, ccv, issuer };
//         addCard(newCard); // Lägger till det nya kortet
//         navigate("/"); // Navigerar tillbaka till startsidan

//       // Proceed with form submission logic
//       } else {
//       setErrors(validationErrors);
//     }
//   };



//     return(
//         <>
//         <h1>Add card</h1>

//         <div id="cardPreview" style={{ border: "1px solid black", padding: "10px", marginBottom: "20px", backgroundColor: issuer === "Visa" ? "blue" : issuer === "Mastercard" ? "orange" : "lightgray" }}>
//         <p>Issuer: {issuer}</p>
//         <p>Card Number: {cardNumber}</p>
//         <p>Card Holder: {cardName}</p>
//         <p>Valid Thru: {month}/{year}</p>
//         <p>CCV: {ccv}</p>
        
//       </div>

//     <div id="addCardForm">

//         <form onSubmit={handleSubmit}>
//         <label>Card number</label>
//         <input type="number" value={cardNumber}  onChange={(e) => setCardNumber(e.target.value)} 
//             maxLength="16"
//             placeholder="1234 5678 9012 3456" />
//                   {errors.cardNumber && <p style={{ color: 'red' }}>{errors.cardNumber}</p>}


//         <label>Card holder name</label>
//         <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} />
//         {errors.cardName && <p style={{ color: 'red' }}>{errors.cardName}</p>}

//         <label>Valid thru</label>
//         <input type="number" value={month} onChange={(e) => setMonth(e.target.value)} maxLength="2" />
//         <input type="number" value={year} onChange={(e) => setYear(e.target.value)} maxLength="2"  />
//         {errors.date && <p style={{ color: 'red' }}>{errors.date}</p>}

//         <label>CCV</label>
//         <input type="number" value={ccv} onChange={(e) => setCvv(e.target.value)}maxLength="3" />

//         <label>Issuer</label>
//           <select value={issuer} onChange={(e) => setIssuer(e.target.value)}>
//             <option value="Visa">Visa</option>
//             <option value="Mastercard">Mastercard</option>
//             <option value="American Express">American Express</option>
//           </select>

//         <button type="submit">Submit</button>
//         </form>
//     </div>
//         </>
//     )
// }

// export default AddCard

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StyleAddCard.css'

const AddCard = ({ addCard }) => {
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [ccv, setCvv] = useState("");
    const [issuer, setIssuer] = useState("Visa");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validate = () => {
        let errors = {};
        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            errors.cardNumber = "Card number must be 16 digits.";
        }
        if (!/^[a-zA-Z\s]+$/.test(cardName)) {
            errors.cardName = "Name cannot contain numbers.";
        }
        const currentYear = new Date().getFullYear() % 100;
        const currentMonth = new Date().getMonth() + 1;
        if (year < currentYear || (year == currentYear && month < currentMonth)) {
            errors.date = "Expiration date is invalid.";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            const newCard = { cardNumber, cardName, month, year, ccv, issuer };
            addCard(newCard); // Lägger till det nya kortet
            navigate("/"); // Navigerar tillbaka till startsidan
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <>
            <h1>Add Card</h1>
            <div id="cardPreview" style={{
                border: "1px solid black",
                padding: "10px",
                marginBottom: "20px",
                backgroundColor: issuer === "Visa" ? "blue" : issuer === "Mastercard" ? "orange" : "lightgray",
                color: "white"
            }}>
                <h2>Card Preview</h2>
                <p>Issuer: {issuer}</p>
                <p>Card Number: {cardNumber.replace(/(\d{4})(?=\d)/g, "$1 ")}</p>
                <p>Card Holder: {cardName}</p>
                <p>Valid Thru: {month}/{year}</p>
                <p>CCV: {ccv}</p>
            </div>


            <div className='addCardForm'>

            <form onSubmit={handleSubmit}>
                <label>Card Number</label>
                <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    maxLength="16"
                    placeholder="1234 5678 9012 3456"
                />
                {errors.cardNumber && <p style={{ color: 'red' }}>{errors.cardNumber}</p>}

                <label>Card Holder Name</label>
                <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                />
                {errors.cardName && <p style={{ color: 'red' }}>{errors.cardName}</p>}

                <label>Valid Thru (MM/YY)</label>
                <input
                    type="text"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    maxLength="2"
                    placeholder="MM"
                />
                <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    maxLength="2"
                    placeholder="YY"
                />
                {errors.date && <p style={{ color: 'red' }}>{errors.date}</p>}

                <label>CCV</label>
                <input
                    type="text"
                    value={ccv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength="3"
                />

                <label>Issuer</label>
                <select value={issuer} onChange={(e) => setIssuer(e.target.value)}>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="American Express">American Express</option>
                </select>

                <button type="submit">Submit</button>
            </form>

            </div>
            
        </>
    );
};

export default AddCard;
