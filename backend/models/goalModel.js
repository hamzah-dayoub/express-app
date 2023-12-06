// Import Mongoose
const mongoose = require('mongoose');

// Define a schema
const goalSchema = new mongoose.Schema({
    /* mongoose.Schema used to define the structure of a 
    document or a set of documents in a MongoDB collection.
    it takes 2 main parameters:
    */

    /* 
    1- Definition Object:
    This is an object that defines the fields and their types in the document.
     Each key in the object represents a field, and the associated value is an
      object specifying the type and any additional validation rules.
     */

    user: {
        type: mongoose.Schema.Types.ObjectId,
        // Using mongoose.Schema.Types.ObjectId for the 'user' field indicates
        // that this field will store MongoDB ObjectId values. It represents a reference
        // to the unique identifier of a user in the 'User' collection, establishing
        // a relationship between the 'Goal' and 'User' models.
        required: true,
        // add referrence to know which model dose this object id pertain to and 
        ref: User,
    },
    text: {
        type: String,
        required: [true, "please add a text value"]
    }



},

    /*
    
    2- Options Object (Optional):
    This is an optional object that allows you to configure various options
     for the schema. One common option is timestamps, which, when set to true,
    adds createdAt and updatedAt fields to the document.
    
    */
    {
        timestamps: true
    }
)



// Export the model
module.exports = mongoose.model('Goal', goalSchema) // ('Goal') :  Model Name 