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

    it('Test for Unlike Post', () => {
        return Post.findOneAndUpdate({
            _id:Object("6208b7c3c4be0210d4325750")
        },
            {
                $pull: {
                    likes: ["6207f24d61d26e27c456b939"]   
                }
            }
        ).then((res) => {
            expect(res).toBeTruthy();
        })

    });

});
 