module.exports = (app) => {
    require('./messages')(app);
    require('./login')(app);
    require('./signin')(app);
}