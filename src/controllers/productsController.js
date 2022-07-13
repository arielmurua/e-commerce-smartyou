const productsController = {
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

module.exports = productsController
