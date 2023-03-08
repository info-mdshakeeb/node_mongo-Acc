const fs = require("fs")

//load data form json
const data = fs.readFileSync('./public/users.json', 'utf8');
const json = JSON.parse(data);
const users = json.users;

module.exports.getRandomUser = (req, res) => {
    // Get the random user
    const randomIndex = Math.floor(Math.random() * users.length);
    res.send(users[randomIndex]);
}
module.exports.getAllUsers = (req, res) => {
    const { limit } = req.query;
    if (limit) {
        const limitUsers = users.slice(0, limit);
        res.send(limitUsers);
    } else {
        // Get all users
        res.send(users);
    }
}
module.exports.saveUser = (req, res) => {
    // Save the user
    const user = req.body;
    const { id, gender, name, contact, address, photoUrl } = user;
    if (!id || !gender || !name || !contact || !address || !photoUrl) {
        res.status(400).send({ message: "Please provide all the required fields" });
    } else {
        users.push(user);
        // Save the data to the json file
        const data = JSON.stringify({ users }, null, 2);
        console.log('data', data);
        fs.writeFileSync('./public/users.json', data);
        res.send({ message: "User saved" });
    }
}
// Update the user by id
module.exports.updateUser = (req, res) => {
    const { id } = req.params;
    const update = req.body;
    // const user = req.body;
    const getUser = users.find((user) => user.id == id);
    console.log('getUser', getUser);
    if (!getUser) {
        res.status(400).send({ message: "User not found" })
    } else {
        const index = users.indexOf(getUser);
        users[index] = { ...getUser, ...update };
        // Save the data to the json file
        const data = JSON.stringify({ users }, null, 2);
        fs.writeFileSync('./public/users.json', data);
        res.send({ message: "User updated" });
    }
}