import H1 from './H1'

const Form = ( {addNote, newNote, handleNoteChange} ) => {
    return(
        <form onSubmit={addNote}>
            <H1 text={"Submit new note"} />
            <input 
                value={newNote}
                onChange={handleNoteChange}
            />
            <button type='submit'>Save note</button>
        </form>
    )
}

export default Form