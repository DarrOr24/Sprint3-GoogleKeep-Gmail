const { useState, useEffect } = React

export function MailFilter({ filterBy, onFilter }) {
    const [ filterByToEdit, setFilterByToEdit ] = useState({ ...filterBy })
    // const [ filterByToEdit, setFilterByToEdit ] = useState(filterBy)

    useEffect(() => {
        console.log('filterByToEdit:', filterByToEdit)
        onFilter(filterByToEdit)
        // onFilter({ ...filterByToEdit })
    }, [filterByToEdit])

    function handleChange({ target }) {
        const { name, type } = target
        const value = (type === 'number') ? +target.value : target.value

        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [name]: value }))
    }

    return (
        <section className="mail-filter">
            <img src="assets/img/magnifying_glass.svg" alt="" />
            <input onChange={handleChange} value={filterByToEdit.txt} name="txt" type="text" placeholder="Search mail"/>
            {/* <span>Search mail</span> */}
        </section>
    )
}
