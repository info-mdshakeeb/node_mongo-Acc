// error handel :
const errorHandel = require("./heandelError");
const getData = async () => {
    try {
        const myError = new Error("Error Occured")
        throw myError;
        // undefined.find()
    } catch (error) {
        errorHandel(error)
    }
}

getData()
// function errorHandel(error) {
//     const { name, message, stack } = error;
//     console.log(name, message);

// }


