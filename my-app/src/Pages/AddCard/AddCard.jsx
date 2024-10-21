import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardComponent from '../../Components/Cardcomponent';
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
            addCard(newCard); // Lägg till det nya kortet
            navigate("/"); // Navigera tillbaka till startsidan
        } else {
            setErrors(validationErrors);
        }
    };

    // Skapar ett objekt för kortet för att skicka till CardComponent
    const cardPreview = { cardNumber, cardName, month, year, ccv, issuer, isActive: false };

    return (
        <>
            <h1>Add Card</h1>

            <div id="cardPreview">
                <CardComponent card={cardPreview} /> {/* Återanvänd CardComponent */}
            </div>

            <form onSubmit={handleSubmit} className='addCardForm'>
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
        </>
    );
};

export default AddCard;

