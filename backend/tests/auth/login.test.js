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
    it('Test for Login User', () => {
        const login = {
            "email": "sabin@gmail.com",
            "password": "sabin123",
           
        };
        return User.findOne(login)
            .then((res) => {
                expect(res.email).toEqual('sabin@gmail.com');
            });
    });

});
