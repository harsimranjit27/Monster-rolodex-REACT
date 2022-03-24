import { Component } from 'react';
import './card.styles.css';

class Card extends Component {
    render(props) {
        const {name, id, email} = this.props.monster;
        return (
            <div className="card-container" key={id}>
                <img src={`https://robohash.org/${id}/set=set2&size=100x100`} alt={`monster ${name}`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}

export default Card;