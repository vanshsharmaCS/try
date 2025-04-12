const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Simulated DB (replace with real DB logic)
const users = []; // Replace this with your MongoDB or MySQL query

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Signup Route
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const existing = users.find(u => u.email === email);

  if (existing) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const newUser = { name, email, password };
  users.push(newUser); // Replace this with DB insert query

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

