const fs = require("fs")
const data = fs.readFileSync('./public/users.json', 'utf8');
const json = JSON.parse(data);
const users = json.users;

module.exports.getRandomUser = (req, res) => {
    // Get the random user
    const randomIndex = Math.floor(Math.random() * users.length);
    res.send(users[randomIndex]);
}
module.exports.getAllUsers = (req, res) => {
    const limit = req.query.limit;
    if (limit) {
        const limitUsers = users.slice(0, limit);
        res.send(limitUsers);
    }
    // Get all users
    res.send(users);
}