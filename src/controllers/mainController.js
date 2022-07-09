const mainController = {
    index: (req,res)=>{
        res.render('index', {
            pageTitle: 'Smartyou'
        });
    },
}


module.exports = mainController