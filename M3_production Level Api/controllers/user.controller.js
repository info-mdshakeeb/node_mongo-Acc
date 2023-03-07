module.exports.getUserData = (req, res) => {
    res.send("i an new user")

}
module.exports.saveUserData = (req, res) => {
    res.send("i added data")
}
module.exports.saveAUserData = (req, res) => {
    const { id } = req.params
    console.log(id);
    res.send(`id is created ${id}`)
}