const Notify = require('../../models/notifyModel');
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

describe('Test for Notify Schema', () => {
    it('Test for Delete Notifies',async () => {
       
        const deleteNotifies = await Notify.deleteMany({_id:"61b77a9fc2911ca494be991c"}); 
        expect(deleteNotifies.ok);
    });

});
