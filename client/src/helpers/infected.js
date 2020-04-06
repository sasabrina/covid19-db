// Funciones que manipulan data de la api para mostrar en la tabla
const isAlive = x => x.live ? "" : "grey-row";

const createGender = x => x.female ? "Female" : "Male"

const createDate = x => {
    let date = x.infect_date ? new Date(x.infect_date) : null
    return date !== null ? `${date.getFullYear()}.${date.getMonth() +1}.${date.getDate()}` : '-'
}


// Nombres de las columnas de la tabla
const tableHeadData = ['Name', 'Last Name', 'Country', 'Age', 'Gender', 'Infect Date']


// Función para ordenar la tabla por edad
const handleSort = (hookDirection, hookType, setter, data) => {
    setter(hookDirection[hookType])

    return hookType === 'asc' ? ascSorted(data) : descSorted(data)
}

// Funciones auxiliares a handleSort
const ascSorted = data => data.sort((a, b) => a.age - b.age)
const descSorted = data => data.sort((a, b) => a.age < b.age ? 1 : -1)

export { isAlive, createGender, createDate, tableHeadData, handleSort }