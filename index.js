const express = require('express');
const volleyball = require('volleyball');
const cors = require('cors');
const bodyParser = express.json();

const app = express();

app.use(volleyball);
app.use(cors());
app.use(bodyParser);

//view on http://localhost:5000/
app.get('/', (req, res) => {
    res.json({
        message: "Hello World!😎"
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})

