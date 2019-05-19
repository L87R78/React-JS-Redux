let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

let app = express();

let mongoose = require('mongoose');
let port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

const mongoURl = "mongodb://localhost:27017/BooksReact";

mongoose
    .connect(mongoURl, { useNewUrlParser: true })
    .then(() => console.log("MongoDB is ready"))
    .catch((err) => console.log(err));

let User = require('./Routes/Users');

app.use('/users', User);

app.listen(port, () => {
    console.log(`Server is ready on port ${port}`);
});



