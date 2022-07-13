const mainController = {
    home: (req,res)=>{
        res.render('home', {
            pageTitle: 'Smartyou'
        });
    },
}


module.exports = mainController