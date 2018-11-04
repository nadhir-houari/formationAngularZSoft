var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/livre_d_or', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    db.userModel = mongoose.model('User', new mongoose.Schema({
            first_name: String,
            last_name: String
        })
    )
  
    db.commentModel = mongoose.model('Comment', new mongoose.Schema({
            content: String,
            created_at: Date,
            user_id: String
        })
    )


    console.log('Connection garanted.');
});

module.exports = db;