const express = require('express');
const { get, request } = require('http');
const mysql = require('mysql');
const bdprs = require('body-parser');
const cors = require('cors');

const app = express();
const port =3000;

app.use(bdprs.json());



// Enable all CORS requests
app.use(cors());


// //conect

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'api', // Changed from 'dbname' to 'database'
    password: '2024', // Changed from 'pass' to 'password'
});

// You might also want to handle connection errors and establish the connection
conn.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});



// Your POST endpoint
app.post('/api/post', (req, res) => {
    // Access the request body
    const { name, mobile, message, email } = req.body;
  
    // Validate required fields
    if (!name || !mobile || !message || !email) {
      return res.status(400).json({ error: 'All fields are required' });
    }
  
    // Insert data into MySQL
    const query = 'INSERT INTO contact (name, mobile, email, message) VALUES (?, ?, ?, ?)';
    conn.query(query, [name, mobile, email, message], (err, results) => {
      if (err) {
        console.error('Error inserting into MySQL: ', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      // Send a response
      res.json({ message: 'Data inserted successfully', data: { name, mobile, email, message } });
    });
  });




// GET endpoint to retrieve data
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM contact'; // Select all data from the 'contact' table

  conn.query(query, (err, rows) => {
    if (err) {
      console.error('Error retrieving data from MySQL:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Send retrieved data as JSON response
    res.json({ data: rows }); // Send an array of objects representing rows from the table
  });
});








app.get("/",(req,res) => {
    res.send("api running");
} )



  // Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });