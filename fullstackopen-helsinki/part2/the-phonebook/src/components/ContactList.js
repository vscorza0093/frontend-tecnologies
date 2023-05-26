const ContactList = ( {persons} ) => {
    
    return(
    <div>
        <h2>Contacts</h2>
        {persons.map(person => <li key={person.name}>{person.name} - {person.number}</li>)}
    </div>
    )
}

export default ContactList