module.exports.getUsers = async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray();
    res.send(results)
}
module.exports.getUser = (req, res) => {
    res.send("i ma singer")
}
module.exports.postUser = (req, res) => {
    res.send("i ma adding")
}
