const users = [
    {
        id: 1, gender: 'male',
        name: 'John',
        contact: { phone: '123-456-7890' },
        address: { country: 'USA' },
        photoUrl: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
        id: 2, gender: 'female',
        name: 'Jane',
        contact: { phone: '234-567-8901' },
        address: { country: 'Canada' },
        photoUrl: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
        id: 3, gender: 'male',
        name: 'Bob',
        contact: { phone: '345-678-9012' },
        address: { country: 'Mexico' },
        photoUrl: 'https://randomuser.me/api/portraits/men/3.jpg'
    },
    {
        id: 4, gender: 'female',
        name: 'Mary',
        contact: { phone: '456-789-0123' },
        address: { country: 'Brazil' },
        photoUrl: 'https://randomuser.me/api/portraits/women/4.jpg'
    }
]

module.exports.getRandomUser = (req, res) => {
    // Get the random user
    const randomUser = users.sort(() => Math.random() - 0.5);
    res.send(randomUser[0]);
}