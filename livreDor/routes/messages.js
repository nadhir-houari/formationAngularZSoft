let MessagerController = require('../controllers/messageController');

module.exports = function(app) {
    
    app.get('/', (request, response) => {
        MessagerController.all((commentaires) => {
            response.render('shared/index', { commentaires: commentaires });
        })
    
    });
    
    app.post('/', (request, response) => {
        let commentaire = {
            nom: request.body.nom,
            prenom: request.body.prenom,
            message: request.body.message
        };
    
        if (commentaire.message === undefined || commentaire.message === '' || !commentaire.message.trim() &&
            commentaire.nom === undefined || commentaire.nom === '' || !commentaire.nom.trim() &&
            commentaire.prenom === undefined || commentaire.prenom === '' || !commentaire.prenom.trim()) {
            request.flash('error', "l y a une erreur");
            response.redirect('/');
        }
        else {
            MessagerController.create(commentaire, () => {
                request.flash('success', 'Votre Commentaire était publié avec succés');
                response.redirect('/');
            });
        }
    })
    
    app.get('/message/:nom/:prenom', (request, response) => {
        MessagerController.findByFirstLastName(request.params.nom, request.params.prenom, (commentaires) => {
            if (commentaires.length === 0)
                response.redirect('/')
            else
                response.render('messages/show', { commentaires });
        })
    });
    
    app.get('/message/:nom/:prenom/:id', (request, response) => {
        MessagerController.deleteCommentById(request.params.id, (result) => {
            response.redirect('/message/' + request.params.nom + '/' + request.params.prenom);
        });
    })

}