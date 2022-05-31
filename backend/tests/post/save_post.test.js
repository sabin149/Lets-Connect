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

    it('Test for Save Post', () => {
        return User.findOneAndUpdate({ 
            _id:Object("6207ec775f69106131688a13")
        },
            {
                $push: {
                    saved: ["6208b7c3c4be0210d4325750"] 
                }
            }
        ).then((res) => {
            expect(res).toBeTruthy();
        })

    });

});
 