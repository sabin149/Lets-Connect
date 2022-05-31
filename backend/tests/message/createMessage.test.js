const Message = require('../../models/messageModel');
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

describe('Test for Message Schema', () => {
    it('Test for Create Message', () => {
        const createmessage = {
            conversation: '61fe25ce66338620f57d8023',
            "text": "This is a first test msg",
            "sender": "61b77a9fc2911ca494be991c",
            "receipt": "61ba2991ffa8a257546e32f0",
        };

        return Message.create(createmessage)
            .then((res) => {
                expect(res.text).toEqual('This is a first test msg');
            });
    });
 
});
