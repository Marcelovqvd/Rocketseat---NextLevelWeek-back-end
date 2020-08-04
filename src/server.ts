import express from 'express';

const app = express();

app.use(express.json());

const users = [];

app.get("/users", (req, res) => {

    return res.json(users);
})

app.post("/users", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;

    const user = {
        name,
        age,
    }

    users.push(user);
    return res.json(user);
});

app.delete("/users/:id", (req, res) => {
    console.log(req.params)
    return;
}) 

app.listen(3333);