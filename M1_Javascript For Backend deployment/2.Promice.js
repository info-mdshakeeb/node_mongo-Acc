// define promise
const myPromise = new Promise((resolve, error) => {
    const user = { id: 1 };
    if (!user) {
        error('User not found')
    } else if (user) {
        setTimeout(() => {
            resolve({ name: "shakeeb" })
        }, 2000)
    }
})
const userId = [1, 2, 3, 4, 5, 6]
let users = [];

for (i = 0; i < userId.length; i++) {
    myPromise.then(data => {
        users.push(data)
    })
}
console.log(users);


//how promise work
// myPromise
//     .then(res => console.log(res))
//     .catch(err => console.log(err))