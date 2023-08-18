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
        console.log('Successfully connected to MongoDB job applications collection using Mongoose.');
    }
});

// SCHEMA: Define the collection's schema.
const applicationSchema = mongoose.Schema({
    company:   { type: String, rquired: true },
	position:    { type: String, required: true },
	salary:     { type: Number, required: true },
	startDate:   { type: Date, required: true, default: Date.now }
});

// Compile the model from the schema.
const Application = mongoose.model('Application', applicationSchema);


// CREATE model *****************************************
const createApplication = async (company, position, salary, startDate) => {
    const application = new Application({ 
        company: company,
        position: position, 
        salary: salary, 
        startDate: startDate
    });
    return application.save();
    
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrieveApplication = async () => {
    const query = Application.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveApplicationByID = async (_id) => {
    const query = Application.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteApplicationByID = async (_id) => {
    const result = await Application.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateApplication = async (_id, company, position, salary, startDate) => {
    const result = await Application.replaceOne({_id: _id }, {
        company: company,
        position: position,
        salary: salary,
        startDate: startDate
    });
    return { 
        _id: _id, 
        company: company,
        position: position,
        salary: salary,
        startDate: startDate 
    }
}


// Export our variables for use in the controller file.
export { createApplication, retrieveApplication, retrieveApplicationByID, updateApplication, deleteApplicationByID }