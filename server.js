// heroku app name note-taker1665

const fs = require('fs');
const path = require('path');
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// tells Heroku to use their environment variable port, and if not, default to port 3001
const PORT = process.env.PORT || 3001;

// instantiate server
const app = express();

// MIDDLEWARE: functions mounted to server
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// instructs the app to use the public folder to acces front-end files
app.use(express.static('public'));
// these routes need to be after the line above, since the routes talk to the public folder
app.use('/api', apiRoutes);
// html routes should be listed after api routes
app.use('/', htmlRoutes);


// set the server up to listen using the listen() method, this should always be last
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})