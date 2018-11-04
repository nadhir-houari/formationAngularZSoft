let connection = require('../config/db');
let connection2 = require('../config/db2');

let Message =  require('../models/messages');
var User = connection2.userModel;
// var Comment = connection2.model('Comment')
class MessagerController {
    
    static create(commentaire, callback) {
        console.log(connection2.base.Mongoose.model('User'))
        if(User != undefined)
            {console.log(User);
            var user = new User({
                first_name: commentaire.prenom,
                last_name: commentaire.nom
            })
            user.save((error, user)=>{
                if(error) throw error;
                user.speak();

            })}
        connection.query(' SELECT * FROM user WHERE nom = ? AND prenom = ? LIMIT 1', [commentaire.nom, commentaire.prenom], (error, users) => {
            if (error) throw error;
            if (users.length === 0) {
                connection.query('INSERT INTO user SET nom = ?, prenom = ?', [commentaire.nom, commentaire.prenom], (error, result) => {
                    if (error) throw error;
                    const { insertId } = result;
                    connection.query('INSERT INTO messages SET content = ?, created_at = ?, user_id = ?', [commentaire.message, new Date(), insertId], (error, result) => {
                        if (error) throw error;
                        callback(result);
                    });
                })
            } else {
                const user_id = users[0].user_id;
                connection.query('INSERT INTO messages SET content = ?, created_at = ?, user_id = ?', [commentaire.message, new Date(), user_id], (error, result) => {
                    if (error) throw error;
                    callback(result);
                });
            }
        });
    };

    static findById(id, callback) {
        connection.query(' SELECT * FROM messages WHERE message_id = ? LIMIT 1', [id], (error, rows) => {
            if (error)
                throw error;
            else
                callback(new Message(rows[0]));
        });
    }

    static findByFirstLastName(nom, prenom, callback) {
        connection.query(' SELECT * FROM messages INNER JOIN user ON messages.user_id = user.user_id WHERE user.nom = ? AND user.prenom = ?', [nom, prenom], (error, rows) => {
            if (error)
                throw error;
            else {
                rows = rows.map((row) => new Message(row));
                callback(rows);
            }
        });
    }

    static all(callback) {
        connection.query('SELECT * FROM messages INNER JOIN user ON messages.user_id = user.user_id', (error, rows) => {
            if (error)
                throw error;
            else
                callback(rows.map((row) => new Message(row)));
        });
    };

    static deleteCommentById(id, callback) {
        connection.query(' DELETE FROM messages WHERE message_id = ?', [id], (error, result) => {
            if (error)
                throw error;
            else {
                callback(result);
            }
        });
    }
}

module.exports = MessagerController;