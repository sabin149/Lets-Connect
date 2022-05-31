const Conversation = require('../../models/conversationModel');
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

describe('Test for Conversation Schema', () => {
    it('Test for Get Conversation',async () => {
       
        const getConversation = await Conversation.find();
        expect(getConversation.ok);
    });

});
