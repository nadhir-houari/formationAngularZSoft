let connection = require('../config/db');
let moment = require('moment');

class Message {

    constructor(row) {
        this.row = row;
        this.row.created_at = moment(row.created_at);
    }

    get userId() {
        return this.row.user_id;
    }

    get messageId() {
        return this.row.message_id;
    }

    get content() {
        return this.row.content;
    }

    get nom() {
        return this.row.nom;
    }

    get prenom() {
        return this.row.prenom;
    }

    get created_at() {
        return this.row.created_at;
    }
}

module.exports = Message;