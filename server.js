const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const dev = {
    'ken' : {
        'Association': '100Devs',
        'Coffee chat': 'Yes',
        'Twitter': 'Kb9700',
        'Specialty': 'Backend'
    },
    'lee' : {
        'Association': '100Devs',
        'Coffee chat': 'Yes',
        'Twitter': 'stacksantos',
        'Specialty': 'Frontend'
    },
    'unkown': {
        'Association': 'Unkown',
        'Coffee chat': 'Unkown',
        'Twitter': 'Unkown',
        'Specialty': 'Unkown'
    }
}





app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response) => {
    const devName = request.params.name.toLowerCase()
    if (dev[devName]) {
        response.json(dev[devName])
    } else {
        response.json(dev['unkown'])
    }
    response.json(dev)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Your server is running on port ${PORT}! Everything is working fine.`)
})