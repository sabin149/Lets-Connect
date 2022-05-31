const User = require('../../models/userModel');
const mongoose = require('mongoose');

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
    it('Test for Get Save Posts',async () => {
       
        const getSavePosts= await User.find();
        expect(getSavePosts.ok);
    });

});
