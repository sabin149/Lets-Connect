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
    it('Test for Create Notify', () => {
        const createNotify = {
            "content": "This is a first test notify",
            "id":"6207f24d61d26e27c456b939",
            "user": "6207f24d61d26e27c456b939",
            "recipients": ["6207f24d61d26e27c456b939"],
            "text":"This is a first test notify",
           
        };

        return Notify.create(createNotify)
            .then((res) => {
                expect(res.content).toEqual('This is a first test notify');
            });
    });
 
});
