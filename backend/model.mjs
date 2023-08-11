// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Music collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const songSchema = mongoose.Schema({
    artist:   { type: String, rquired: true },
	title:    { type: String, required: true },
	rating:     { type: Number, required: true },
	releaseYear:   { type: Date, required: true, default: Date.now }
});

// Compile the model from the schema.
const Song = mongoose.model('Song', songSchema);


// CREATE model *****************************************
const createSong = async (artist, title, rating, releaseYear) => {
    const song = new Song({ 
        artist: artist,
        title: title, 
        rating: rating, 
        releaseYear: releaseYear
    });
    return song.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveMusic = async () => {
    const query = Song.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveSongByID = async (_id) => {
    const query = Song.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteSongById = async (_id) => {
    const result = await Song.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateSong = async (_id, artist, title, rating, releaseYear) => {
    const result = await Song.replaceOne({_id: _id }, {
        artist: artist,
        title: title,
        rating: rating,
        releaseYear: releaseYear
    });
    return { 
        _id: _id, 
        artist: artist,
        title: title,
        rating: rating,
        releaseYear: releaseYear 
    }
}


// Export our variables for use in the controller file.
export { createSong, retrieveMusic, retrieveSongByID, updateSong, deleteSongById }