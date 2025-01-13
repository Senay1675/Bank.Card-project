

import { Link } from 'react-router-dom';
import CardComponent from '../Components/Cardcomponent';

const HomePage = ({ cards }) => {
    return (
        <div style={{ display: 'flex', gap: '2rem' }}>
            {/* Active Cards */}
            <div>
                <h1>Active Card</h1>
                {cards.filter(card => card.isActive).map(card => (
                    <div key={card.cardNumber}>
                        <CardComponent card={card} /> 
                    </div>
                ))}
            </div>

            {/* Inactive Cards */}
            <div>
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
        </div>
    );
};

export default HomePage;
