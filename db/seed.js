const client = require('./index');

const seed = async (users) => {
    await client.connect();
    try {
        const db = client.db('meet-the-team'); // name of the database
        const collection = db.collection('users'); // name of the collection
        await collection.deleteMany({});
        await collection.insertMany(users);
    }
    catch (error) {
        console.log(error, "error")
    }
    finally {
        console.log("seeding complete")
    }
};

module.exports = seed;