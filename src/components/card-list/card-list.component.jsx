import { Component } from 'react'

class ClassList extends Component {

    render(props) {
        
        const {monsters} = this.props;
        return (
            <div>{monsters.map(monster => {
                    return (<h1 key={monster.id}> {monster.name} </h1>);
                })}
            </div>
        )
    }
}
export default ClassList;

