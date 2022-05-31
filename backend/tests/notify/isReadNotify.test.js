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

    it('Test for IsReadNotify', () => {
        return Notify.findOneAndUpdate({
            _id:"620cb9bb73ad74e891976048"
        },
         {$set:{
                "isRead":true
            }}
        ).then((res) => {
            expect(res.isRead).toBeEqual(true);

        })

    });

});
 