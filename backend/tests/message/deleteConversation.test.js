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
    it('Test for Delete Conversation',async () => {
       
        const deleteConversation = await Conversation.deleteOne({_id:"61fe25ce66338620f57d8023"}); 
        expect(deleteConversation.ok);
    });

});
