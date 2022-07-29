///Requires
const express = require('express');
const path = require('path');

//instance de express y defición de puerto
const app = express();
const port = process.env.PORT || 3030;

//Template engine set
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')


//Static files
app.use('/static', express.static(path.join(__dirname, '../public')))
app.use('/css', express.static(path.join(__dirname, '../public/css')))
app.use('/images', express.static(path.join(__dirname, '../public/images')))


//Routes
const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes)

const productsRoutes = require('./routes/productsRoutes');
app.use('/products', productsRoutes)

const userRoutes = require('./routes/userRoutes');
app.use('/user', userRoutes)




//Server
app.listen(port, ()=>{
    console.log(`<<Server running on port ${port}\nhttp://localhost:${port}>>`);
})