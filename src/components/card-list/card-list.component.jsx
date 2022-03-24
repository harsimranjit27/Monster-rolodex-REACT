import { Component } from 'react'
import './card-list.styles.css'
import './card.styles.css'

class ClassList extends Component {

    render(props) {
        
        const {monsters} = this.props;
        
        return <div className="card-list">
            {monsters.map(monster => {
                const {name, id, email} = monster;
                return (
                    <div className="card-container" key={id}>
                        <img src={`https://robohash.org/${id}/set=set2&size=100x100`} alt={`monster ${name}`}/>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                )
            })}
        </div>
    }
}
export default ClassList;

