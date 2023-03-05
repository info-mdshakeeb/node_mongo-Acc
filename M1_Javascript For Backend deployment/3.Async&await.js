const myPromise = new Promise((get, fail) => {
    const user = { id: 1 }
    if (!user) {
        fail("something is not right")
    } else if (user) {
        setTimeout(() => {
            get("user is found")
        }, 400);

    }
})

const getData = async () => {
    const res = await myPromise;

    console.log(res);
}
getData()

const getUser = async () => {
    const res = await fetch('')
    const data = await res.json();
    const getDetails = await fetch(`www.spm.com/${data.id}`)
    const product = await getDetails.json()
}