const express = require('express');
const cors = require('cors');

const app = express();

require('./db');

app.use(cors());
app.use(express.json());

app.listen(5500, () =>
{
    console.log('Server is succesfully connected on port 5500');
}
)