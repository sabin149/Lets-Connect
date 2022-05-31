const Notify = require('../../models/notifyModel');
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

describe('Test for Notify Schema', () => {
    // the code below is for insert testing
    it('Test for Get Notifies',async () => {
        const getNotify = await Notify.find();
        expect(getNotify.ok);
    });

});
