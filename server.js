const express = require('express');
const app = express();
const port = 3000; //windows 5000 for mac users












//log the port {using JS injection for port}
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});