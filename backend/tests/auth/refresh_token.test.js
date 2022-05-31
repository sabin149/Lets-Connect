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
    it('Test for Refresh Token', () => {
        const refresh_token = {
            "username" : "sabin",
           
        };
        return User.findOne(refresh_token)
            .then((res) => {
                expect(res.username).toEqual('sabin');
            });
    });

});
