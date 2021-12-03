const express = require("express");
const path = require("path");
const app = express();



// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))
 
// Our pug demo endpoint
// app.get("/demo", (req, res)=>{ 
//     res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
// });


app.get('/demo', (req, res)=>{
   
    const params = {}
    res.status(200).render('demo.pug', params);
})

app.get("/about", (req, res)=>{
    res.send("This is about page of my first expres");
});

app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express");
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});
// const port =process.env.PORT || 5000;
// app.listen(port, ()=>{
//     console.log(`The application started successfully on port ${port}`);
// });

const port =process.env.PORT ||9000;
app.listen(port,()=>{
    console.log(`Sever at http://localhost:${port}`);
});

