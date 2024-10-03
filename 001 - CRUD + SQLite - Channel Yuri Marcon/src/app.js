import express from 'express';

// import { openDB } from './configDB.js';
import { createTablePerson, insertPerson, updatePerson, selectPerson, selectAllPerson, deletePerson } from './Controller/Person.js';

const app = express();
app.use(express.json());

// openDB();
createTablePerson();

app.get('/', (req, res) => {
    res.send('Hello World');    
})

app.get('/person/all', async (req, res) => {
    selectAllPerson().then(people => {
        res.json(people);
    });
})

app.get('/person', async (req, res) => {
    selectPerson(req.body).then(person => {
        res.json(person);
    });
})

app.delete('/person', (req, res) => {
    deletePerson(req.body).then(() => {
        res.json({
            "statusCode": 200
        })
    })
})


app.post('/person', (req, res) => {
    insertPerson(req.body);
    res.json({
        "statusCode": 200
    })
})

app.put('/person', (req, res) => {
    if (req.body && req.body.id) {
        updatePerson(req.body);
        res.json({
            "statusCode": 200
        })
    } else {
        res.json({
            "statusCode": 400,
            "message": "Bad Request, you need to provide id"
        })
    }
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})