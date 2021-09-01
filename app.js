const express = require('express');
const app = express();
const routes = require('./routes/index.js');

// settings
app.set('port', process.env.PORT || 3000);

// routes
app.use(routes);

app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')} ...`);
});