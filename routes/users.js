const routes = require('express').Router();
const fs = require('file-system');
const db = require('../database/db_users');
const bodyParser = require('body-parser');



routes.get('/', (req, res) => {
    res.sendFile('C:/Users/johha/Documents/Systemvetenskap/DAWA IK1005/Projekt/add_users/public/index.html');
});

routes.get('/users', async (req, res) => {
    try {
        const users = await db.getUsers();
        res.json(users);
    } catch (error) {
        res.json(error)
    }
});

routes.post('/add', async(req, res) => {
    console.log(req.body);
    try {
        const addUser = await db.addUser(req.body.firstname, req.body.lastname, req.body.email, req.body.password);
        res.json({info : "Successfully"});
    } catch (error) {
        console.log(error);
    }
});

routes.delete('/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deleteUser = await db.deleteUser(id);
        res.json({info : "Delete successfully"});
    } catch (error) {
        console.log(error);
    }
});

routes.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const updateUser = await db.updateUser(firstname, lastname, email, password, id);
        res.json({info : "Update successfully"});
    } catch (error) {
        console.log('error');
    }
});

module.exports = routes;