module.exports = function (app) {

    app.get('/signin', (request, response) => {
        response.render('login/signin');
    })

}