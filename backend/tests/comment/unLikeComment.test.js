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

    it('Test for UnLike Comment', () => {
        return Comment.findOneAndUpdate({
            _id:Object("620cfa6cdb7c4648b2180bf2") 
        },
            {
                $pull: {
                    likes:"6207f24d61d26e27c456b939"
                }
            }
        ).then((res) => {
            expect(res.likes).toBeTruthy();
            
        }) 

    });

});
 