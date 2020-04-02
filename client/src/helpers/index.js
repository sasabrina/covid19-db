// FASE 1: obtengo data de api externa
const fetchData = async (setter, url) => {
    try{
        await fetch(url)
        .then(res => res.json())
        .then(res => setter(res))
    }
    catch(e){
        console.log(e);
    }
}   

// FASE 2: obtengo y manipulo data de api local; GET y POST
const getData = async (setter, url) => {
    try{
        await fetch(url,{
            'mode': 'cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }
        })
        .then(res => res.json())
        .then(res => setter(res))
    }
    catch(e){ console.log(e)}
}

const postData = (data, setter, initialValues) => {
    const payLoad = createPayload(data)

    if(payLoad){
        try {
            fetch('http://localhost:8080/api/infected', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(payLoad)
		    })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setter(initialValues)
            })
        }
        catch(e) {console.log(e)}
    }
}

const createPayload = data => ({
    first_name: data.first_name,
    last_name: data.last_name,
    age: new Date().getFullYear() - new Date(data.birth_date.split('-')).getFullYear(),
    country: data.country,
    female: data.gender === 'female' ? true : false,
    live: data.alive === "yes" ? true : false
})

export { fetchData, getData, postData }