const express = require("express");
//const connectDB = require("./db");
const bcrypt = require('bcryptjs');
// const UserModel = require("./models/user_model");
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require("cors");


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());




function loadUsers() {
    try {
        const data = fs.readFileSync('users.json', 'utf-8');
        return JSON.parse(data).users || [];
    } catch (err) {
        return [];
    }
}

// Save users to the JSON file
function saveUsers(users) {
    fs.writeFileSync('users.json', JSON.stringify({ users }, null, 4));
}

// Register endpoint
app.post('/api/register', async (req, res) => {
    const { username,email, password } = req.body;
    const users = loadUsers();

    // Check if the username already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already taken!' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user
    const newUser = { username,email, password: hashedPassword };
    users.push(newUser);
    saveUsers(users);

    res.status(201).json({ message: 'User registered successfully!' });
});

// Login endpoint
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const users = loadUsers();

    // Find the user
    const user = users.find(user => user.email === email);
    console.log(user);
    if (!user) {
        console.log("user not found");
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare password with the stored hash
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid username or password' });
    }
    res.json(user);
    //res.status(200).json({ message: 'Login successful!' });

});



app.listen(3000, () => {
    console.log("server is running on Port 3000");
})
