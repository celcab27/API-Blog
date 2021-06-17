const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();

app.use('/', routes);

require('./src/db');

app.use(cors());
app.use(express.json());

app.listen(5500, () =>
{
    console.log('Server is succesfully connected on port 5500');
}
)