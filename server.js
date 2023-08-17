const express = require('express');
const app = express();
const port = 3000; //windows 5000 for mac users
const drinks = "beer"



app.get('/get/:number_of_bottles', (req, res)=> {
    const bottles = req.params.number_of_bottles;
    const response = (=>(i = bottles, i< bottles, i--));

    res.send(`
        <h1>${bottles} of bottles of ${drinks} on the wall!</h1>
        <h1>${bottles} bottles of ${drinks}!</h1>
        <h1>Take one down, pass it around!</h1>
        <h1>${bottles} bottles of ${drinks} on the wall!</h1>
        <br />
    `)
});







//log the port {using JS injection for port}
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});