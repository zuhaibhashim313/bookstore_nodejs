const mongoose = require('mongoose');

const schema = mongoose.Schema;

const bookSchema= new schema({
    author:{
        type:String,
        required : true
    },
    title:{
        type: String,
        required : true
    },
    reviews:{
        type:String,
    },
});
module.exports = mongoose.model("Book", bookSchema);
