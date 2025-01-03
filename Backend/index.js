const express = require('express');
const path = require('path');
const mdb = require('mongoose');
const app = express();
const PORT = 3001;
app.use(express.json())
const user_schema = require('./models/users')
mdb.connect("mongodb://localhost:27017/kec")
  .then(() => {
    console.log("MongoDB Connection is Successful");
  })
  .catch(() => {
    console.log("Check your connection string");
  });
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.json('Optimus Prime: Attention Autobots, Transform and Roll Out');
});

app.get('/json', (req, res) => {
    res.json({ name: 'Optimus Prime', quote: 'Freedom is the right of all sentient beings' });
});

app.get('/static', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/page', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});
app.post('/signup', (req, res) => {
    console.log(req.body.firstName, req.body.lastName, req.body.email);
    try{
        var newUser = new user_schema({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
        })
        newUser.save()
        console.log("user added successfully")
        res.status(200).send("user added successfully")
    }
    catch(err){
        console.log(err);
        res.status(500).send("Error adding user");
    }
});

app.get('/getsignup', async (req, res) => {
    var allSignUpRecords = await user_schema.find();
    try{
        res.json(allSignUpRecords);
        console.log("all files fetched");
    } catch(err) {
        console.log(err);
        res.status(500).send("Error fetching records");
    }
});
app.post('/login',async (req, res) => {
    var { email, password } = req.body;
    try {
        var existingUser =await user_schema.findOne({email:email})
        res.json({ message: "Login Successful", isLoggedIn: true });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error logging in");
    }
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});