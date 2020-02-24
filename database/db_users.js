const Promise = require('bluebird');
const sqlite = require('sqlite');

const dbOpen = sqlite.open('./database/db.db', { Promise });

const addUser = async (firstname, lastname, email, password) => {
    try {
        const sqlQuery = 'INSERT INTO users (firstname, lastname, email, password) VALUES (?,?,?,?)';
        const db = await dbOpen;
        return db.run(sqlQuery, firstname, lastname, email, password);
    } catch (error) {
        console.log(error);
    }
}

const getUsers = async ()  => {
    try {
        const sqlQuery = 'SELECT * from users';
        const db = await dbOpen;
        return db.all(sqlQuery);
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (id) => {
    try {
        const sqlQuery = 'DELETE from users where id = ?';
        const db = await dbOpen;
        return db.run (sqlQuery, id);
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (firstname, lastname, email, password, id) => {
    try {
        const sqlQuery = 'UPDATE users SET firstname = ?, lastname = ?, password = ?, email = ? where id = ?';
        const db = await dbOpen;
        return db.run(sqlQuery, firstname, lastname, password, email, id);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addUser : addUser,
    getUsers : getUsers,
    deleteUser : deleteUser,
    updateUser : updateUser
}