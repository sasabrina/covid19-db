const fs = require('fs');

let infected = fs.readFileSync('infected.json')
infected = JSON.parse(infected)

const getInfected = (req, res) => {
    res.json(infected)    
}

const postInfected = (req, res) => {
    let data = req.body

    if(data.hasOwnProperty('first_name') && data.hasOwnProperty('last_name')){
        infected.push(data)
        fs.writeFileSync('infected.json', JSON.stringify(infected))
        res.status('200').json(`New infected added`)
    }else{
        res.status('400').json('Opps! Somenthing went wrong')
    }
}

module.exports = { getInfected, postInfected }