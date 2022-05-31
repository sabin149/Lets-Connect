const Post = require('../../models/postModel');
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

describe('Test for Post Schema', () => {
    
    it('Test for Update Post', () => {
        return Post.findOneAndUpdate({
            _id:Object("6208b423237fcf48b51b2cae")
        },
            {
                $set: {
                    content: "This is a new test post",
                }
            }
        ).then((res) => {
            expect(res.content).toEqual("This is a new post");
        })

    });

});
