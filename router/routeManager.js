module.exports = function (app) {
    const routeHome=require('./routeHome');
    const routeContact=require('./routeContact');
    app.use('/',routeHome);
    app.use('/contact',routeContact);
};
