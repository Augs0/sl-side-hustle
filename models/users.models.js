const User = require('../schema/model/User');

exports.selectUsers = () => {
    return User.find();
};

exports.insertUser = async (newUser) => {
    const user = new User(newUser);
    return user.save()
};