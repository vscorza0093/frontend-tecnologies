import ContactList from "./ContactList"
import Filter from "./Filter"
import PersonForm from "./PersonForm"

const Body = ( {persons, newName, handleNameChange, newNumber, handleNumberChange, addperson, newFilter, handleFilterChange} ) => {
    return(
        <div>
            <Filter newFilter={newFilter} handleFilterChange={handleFilterChange}/>
            <PersonForm newName={newName} 
                        handleNameChange={handleNameChange} 
                        newNumber={newNumber}
                        handleNumberChange={handleNumberChange}
                        addperson={addperson}
            />
            <ContactList persons={persons}/>
        </div>
    )
}

export default Body