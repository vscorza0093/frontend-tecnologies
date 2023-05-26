const PersonForm = ( {newName, handleNameChange, newNumber, handleNumberChange, addperson} ) => {
    
    return(
        <div>
            <h2>Add new contact</h2>
            <form>
                <div>
                name: <input 
                    value={newName}
                    onChange={handleNameChange}
                    />
                </div>
                <div>
                number: <input
                    value={newNumber}
                    onChange={handleNumberChange}
                    />
                </div>
                <div>
                <button onClick={addperson} type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm