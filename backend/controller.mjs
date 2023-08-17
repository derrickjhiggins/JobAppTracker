import 'dotenv/config';
import express from 'express';
import * as applications from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post('/log', (req,res) => { 
    applications.createApplication(
        req.body.company,
        req.body.position,
        req.body.salary,
        req.body.startDate
        )
        .then(application => {
            res.status(201).json(application);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'The creation of the application document has failed.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/log', (req, res) => {
    applications.retrieveApplication()
        .then(application => { 
            if (application !== null) {
                res.json(application);
            } else {
                res.status(404).json({ Error: 'The application document was not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The application document retrieval has failed.' });
        });
});


// RETRIEVE by ID controller
app.get('/log/:_id', (req, res) => {
    applications.retrieveApplicationByID(req.params._id)
    .then(application => { 
        if (application !== null) {
            res.json(application);
        } else {
            res.status(404).json({ Error: 'The application document was not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The application document retrieval has failed.' });
    });

});


// UPDATE controller ************************************
app.put('/log/:_id', (req, res) => {
    applications.updateApplication(
        req.params._id, 
        req.body.company,
        req.body.position, 
        req.body.salary, 
        req.body.startDate
    )
    .then(application => {
        res.json(application);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'The application document update failed.' });
    });
});


// DELETE Controller ******************************
app.delete('/log/:_id', (req, res) => {
    applications.deleteApplicationByID(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'The application document no longer exists.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Deleting the application document failed.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});