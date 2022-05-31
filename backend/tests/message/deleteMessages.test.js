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
    it('Test for Delete Messages',async () => {
       
        const deleteMessages = await Message.deleteOne({_id:"61fe25ce370213ca6f9ae283"}); 
        expect(deleteMessages.ok);
    });

});
