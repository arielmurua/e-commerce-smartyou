module.exports = {
    home: (req,res)=>{
        res.render('home', {
            pageTitle: 'Smartyou'
        });
    },
}