// import express library, sql2, dotenv to hide sensetive infor and morgan for response status codes. 
const express = require("express"); 
const morgan = require('morgan'); 
const dotenv = require("dotenv").config();
const mysql = require("mysql2"); 
const app = express();
const PORT = process.env.PORT || 3000;

//create my server
app.use(express.json());

// debug using response status code in terminal
app.use(morgan('dev'));

// create mysql connection pool hide my credentials in env. file
const pool = mysql.createPool({
host: process.env.DB_HOST,
user: process.env.DB_USERNAME,
password: process.env.DB_PASSWORD ,
database: process.env.DB_NAME,
waitForConnections: true,
connectionLimit: 10,
queueLimit:0,
})

//start the server using callback function

app.listen(PORT, () => {
console.log(`Server is running on PORT ${PORT}`);
});


// get the users table infor 
//use select and order by user_id, query.
//check for errors and success
app.get("/users", (req, res) => {

let sql = "SELECT * FROM users ORDER BY user_id";
pool.query(sql, (err, result) => {
   if (err) {
    res.status(500).json({error: 'Database Error'});
    return;
   }
    res.status(200).json(result);
   });
});



//use put to change user_id 4's name. 
//validate my data check if postman has title infor 
//insert the new show into table
//check for errors and success use status code
app.post('/post/watchlist', (req,res) => {
  const title = req.body.title;
  if (!title) {
     return res.status(400).json({error: 'title does not exist'});
   }

  const sql = "INSERT INTO watchlist (title) VALUES (?);" 
  pool.query(sql, [title], (err, result) => {
   if (err) {
    res.status(500).json({error: 'Database Error'});
    return;
   }
    res.status(201).json({show_id: result.insertId, message:`${title} TV show has been successfully added`});
   });


});

//use get to check if new show has been added
//query sql for the watchlist  
//check for errors and success in terminal using morgan

app.get("/new-show", (req, res) => {

let sql = "SELECT * FROM watchlist ORDER BY show_id";
pool.query(sql, (err, result) => {
   if (err) {
    res.status(500).json({error: 'Database Error'});
    return;
   }
    res.status(200).json(result);
   });
});

//use post to a user that has show on their wtach list 
//validate data check if IDs been add to body on postman
// query to insert my data.
//check for errors and success

app.post('/post/users/:user_id/watchlist', (req,res) => {
  const user_id = req.params.user_id
  const {show_id} = req.body;
   if (!show_id) {
    return res.status(400).json({error: 'you need to add show_id'});
   }
  
  const sql = "INSERT INTO users_watchlist (user_id, show_id) VALUES (?, ?);" 
  pool.query(sql, [user_id, show_id], (err, result) => {
   if (err) {
    res.status(500).json({error: 'Database Error'});
    return;
   }
    res.status(201).json({show_id: result.insertId, message:`your new ${user_id} ${show_id} has been successfully added`});
   });

});


//get the new watchlist data
//use response code to check for errors and success
app.get("/new-watchlist", (req, res) => {

let sql = "SELECT * FROM users_watchlist ORDER BY user_id ";
pool.query(sql, (err, result) => {
   if (err) {
    res.status(500).json({error: 'Database Error'});
    return;
   }
    res.status(200).json(result);
   });
});


//use put to change user_id 4's name. 
//validate my data, if post man has name in body and check if name is less than varchar 30
//get data from sql, query.
//check for errors and success

app.put('/update-user/:id', (req, res) => {
    const userId = req.params.id; 
    const {name} = req.body;
   if (!name) {
   return res.status(400).json({error: 'name does not exist'});
   }
    if (name.length > 30) {
    return res.status(400).json({error: 'name can not exceed 30 letters'});
   }
    const sql = 'UPDATE users SET name = ? WHERE user_id = ?';
    pool.query(sql, [name, userId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json({ message: `User name updated to ${name}` });
    });
});



