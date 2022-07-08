const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3030;

//Template engine set
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')


//Static files
app.use('/static', express.static(path.join(__dirname, '../public')))


//Routes
const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes)




//Server
app.listen(port, ()=>{
    console.log(`<<Server running on port ${port}\nhttp://localhost:${port}>>`);
})