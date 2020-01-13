const express = require ('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();




// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');






// Allow accsess to CSS and other files in public folder  this tells node to accept requests from files in this folder
app.use(express.static('public'))







// Routes to different pages and render
app.get("/" ,(req,res) => res.render('home'));








const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));