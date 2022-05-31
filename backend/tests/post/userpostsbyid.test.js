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
    it('Test for Get Posts By Id',async () => {
       
        const getPostsById = await Post.find({_id:"6207f24d61d26e27c456b939"});
        expect(getPostsById.ok);
    });

});
