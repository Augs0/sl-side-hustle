const User = require('../schema/model/User');

const seed = async ({users}) => {
    try {
        await User.deleteMany({});
        await User.insertMany(users);
    }
    catch (error) {
        console.log(error, "error")
    }
    finally {
        console.log("Seeding complete :)");
    }
};

module.exports = seed;