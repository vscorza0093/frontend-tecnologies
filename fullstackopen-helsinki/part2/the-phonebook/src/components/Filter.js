const Filter = ( {newFilter, handleFilterChange} ) => {
    
    return(
        <div>
            name to filter: <input
            value={newFilter}
            onChange={handleFilterChange}
            />
        </div>
    )
}

export default Filter