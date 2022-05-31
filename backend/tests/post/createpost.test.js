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
    it('Test for Create Post', () => {
        const createpost = {
            "content": "This is a second test post",
            "images": "https://res.cloudinary.com/sabin149/image/upload/v1641108587/s-network/rxcpveg57jo1mxomiwo5.png",
            "likes": ["6207ec775f69106131688a13","6207f24d61d26e27c456b939"],
            "user": "6207f24d61d26e27c456b939"
        };

        return Post.create(createpost)
            .then((res) => {
                expect(res.content).toEqual('This is a second test post');
            });
    });

});
