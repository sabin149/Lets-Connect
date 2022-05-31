const User = require('../../models/userModel');
const mongoose = require('mongoose');

// use the new name of the database
const url = 'mongodb://localhost:27017/test_letsconnect';

beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});
afterAll(async () => {
    await mongoose.connection.close();
});

describe('Test for User Schema', () => {
    // the code below is for insert testing
    it('Test for Register User', () => {
        const register = {
            "fullname": "Sabin2 Dangal2",
            "username": "sabin2",
            "email": "sabin2@gmail.com",
            "password": "sabin123",
            "gender": "male"
        };

        return User.create(register)
            .then((res) => {
                expect(res.username).toEqual('sabin2');
            });
    });

});
