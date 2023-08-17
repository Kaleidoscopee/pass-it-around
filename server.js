const express = require('express');
const app = express();
const port = 3000; //windows 5000 for mac users
const drinks = "beer"



app.get("/", (req, res)=>{
    res.send(`<h1>99 Bottles of beer on the wall</h1>
    <a href="http://localhost:300/98">Take one down, pass it around.</a>
    `);
});






// app.get('/:number_of_bottles', (req, res)=> {
//     let bottlesNumber = req.params.number_of_bottles;
//         res.send(`
//         <h1>${bottlesNumber} of bottles of ${drinks} on the wall!</h1>
//         <h1>${bottlesNumber} bottles of ${drinks}!</h1>
//     `)
//     }

//     app.get('/:number_of_bottles', (req, res)=> {
//         let bottlesNumber = req.params.number_of_bottles;
//         let number
//             res.send(`
//             <h1>${bottlesNumber} of bottles of ${drinks} on the wall!</h1>
//             <h1>${bottlesNumber} bottles of ${drinks}!</h1>
//         `)
//         }




    // (function () {
    //     res.send(`
    //     <h1>${bottlesNumber} of bottles of ${drinks} on the wall!</h1>
    //     <h1>${bottlesNumber} bottles of ${drinks}!</h1>
    //     <h1>Take one down, pass it around!</h1>
    //     <h1>${bottlesNumber} bottles of ${drinks} on the wall!</h1>
    //     <br />
    // `)
    // });









//log the port {using JS injection for port}
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
});