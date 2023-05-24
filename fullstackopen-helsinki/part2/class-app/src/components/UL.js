import Note from './Note'

const UL = ( {component} ) => {
    return (
      <ul>
        {component.map(note =>
          <Note key={note.id} note={note}/>
        )}
      </ul>
    )
  }

  export default UL