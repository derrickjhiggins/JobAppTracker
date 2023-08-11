import 'dotenv/config';
import express from 'express';
import * as music from './model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post('/log', (req,res) => { 
    music.createSong(
        req.body.artist,
        req.body.title,
        req.body.rating,
        req.body.releaseYear
        )
        .then(song => {
            res.status(201).json(song);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'The creation of the music document has failed.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/log', (req, res) => {
    music.retrieveMusic()
        .then(song => { 
            if (song !== null) {
                res.json(song);
            } else {
                res.status(404).json({ Error: 'The music document was not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The music document retrieval has failed.' });
        });
});


// RETRIEVE by ID controller
app.get('/log/:_id', (req, res) => {
    music.retrieveSongByID(req.params._id)
    .then(song => { 
        if (song !== null) {
            res.json(song);
        } else {
            res.status(404).json({ Error: 'The music document was not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The music document retrieval has failed.' });
    });

});


// UPDATE controller ************************************
app.put('/log/:_id', (req, res) => {
    music.updateSong(
        req.params._id, 
        req.body.artist,
        req.body.title, 
        req.body.rating, 
        req.body.releaseYear
    )
    .then(song => {
        res.json(song);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'The music document update failed.' });
    });
});


// DELETE Controller ******************************
app.delete('/log/:_id', (req, res) => {
    music.deleteSongById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'The music document no longer exists.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Deleting the music document failed.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});