module.exports = {
    profile: (req, res) => {
        res.render('userProfile', {
            pageTitle: 'Profile'
        })
    },
    login: (req, res) => {
        res.render('login', {
            pageTitle: 'Login'
        })
    },
    register: (req, res) => {
        res.render('register', {
            pageTitle: 'Register'
        })
    }
}