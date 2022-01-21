exports.get404 = (request, response, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
};