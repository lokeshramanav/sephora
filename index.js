const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const emitter = require('./service/events/event')

emitter.on('sendDataToUrl', (arg)=>{
  console.log("Event Data", arg)
})



//ROUTES 
const loadCsvRoutes = require('./routes/get-csv.route');
const userRoutes = require('./routes/user.route');


const db = require('./models/index');

db.sequelize.sync().then(() => {
    console.log("Drop and re-sync db.");
  });

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors());

const PORT = process.env.PORT ||5500

//routes
app.use('/load-csv', loadCsvRoutes);
app.use('/users', userRoutes);

app.listen(PORT , ()=>{
    console.log(`Server Running on PORT: ${PORT}`)
})


