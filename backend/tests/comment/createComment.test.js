const Comment = require('../../models/commentModel');
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

describe('Test for Comment Schema', () => {
    it('Test for Create Comment', () => {
        const createcomment = {
            "content": "This is a first test comment",
            "likes": ["6207ec775f69106131688a13","6207f24d61d26e27c456b939"],
            "user": "6207f24d61d26e27c456b939",
            "postId": "61d17ebfbd170d5832867aa7",
            "postUserId": "61ba2991ffa8a257546e32f0",
        };

        return Comment.create(createcomment)
            .then((res) => {
                expect(res.content).toEqual('This is a first test comment');
            });
    });
 
});
