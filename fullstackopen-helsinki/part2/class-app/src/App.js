import { useState } from 'react'
import Card from './components/Card'
import Form from './components/Form'

const App = ( {component} ) => {
  const [notes, setNotes] = useState(component)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

  const handleFilterClick = () => (setShowAll(!showAll))
  
  return (
    <div>
      <div>
        <button onClick={handleFilterClick}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <Card component={notesToShow}/>
      <Form addNote={addNote} newNote={newNote} handleNoteChange={handleNoteChange}/>
    </div>
  )
}

export default App