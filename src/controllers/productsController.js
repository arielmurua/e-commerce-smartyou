module.exports = {
    index: (req, res) => {
        res.render('productsIndex', {
            pageTitle: 'Listado Productos'
        })
    },
    details: (req, res) => {
        res.render('productsDetail', {
            pageTitle: 'Detalle producto'
        })
    }
}
