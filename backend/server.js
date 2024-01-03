const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

const app = express();

const routes = require('./routes/companyRoutes');

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use('/company', routes);

sequelize
.sync()
.then(result => {
    app.listen(4000);
})
.catch(err => console.log(err));
