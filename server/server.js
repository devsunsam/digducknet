const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser')
const router = require('./route');

const sequelize = require('./models').sequelize;
sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', router);



app.get('/', (req, res) => {
    res.send(`Response Complate`);
})


app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`);
})