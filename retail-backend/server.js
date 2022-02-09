const express = require('express');
const app = express();
// const fs = require('fs');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const routes = require('./routes/customers')(app,fs);
// app.use('/api/users', require('./routes/customers'));
app.get('/', (req, res) => res.send("WE ARE RUNNING"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


