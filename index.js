const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

const users = [
    { id: 0, name: 'Md. Ahsan Ullah', email: 'onelyonahsan@gmail.com' },
    { id: 1, name: 'Md. Liasjs', email: 'onelyonahsan@gmail.com' },
    { id: 2, name: 'Md. Hosanlr', email: 'onelyonahsan@gmail.com' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('this is body', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('listening', port);
});