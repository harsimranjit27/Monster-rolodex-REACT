import Card from '../card/card.component.jsx'
import './card-list.styles.css'

const ClassList = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />
      })}
    </div>
  )
}
export default ClassList;
