const Gun = require('gun');
const express = require('express');
const cors = require('cors');
const app = express();

const port = (process.env.PORT || 8080);

app.use(cors());
app.use(Gun.serve);

app.get('/', (req, res) => {res.status(200).send('App node is live');});

const server = app.listen(port, ()=>{console.log(`server listening on port ${port}`);});


Gun({ web: server });
