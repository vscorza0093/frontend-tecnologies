import Note from './Note'
import H1 from './H1'

const Card = ( {component} ) => {
  return (
    <div>
      <H1 text="Notes" />
      <ul>
        {component.map(note =>
          <Note key={note.id} note={note}/>
          )}
      </ul>
    </div>
  )
}

  export default Card