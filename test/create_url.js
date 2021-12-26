const assert = require('assert')
const Url = require('../src/models/Url');
describe("Create a url record", () => {
    // done is a callback available to each it statement.
    it("Save a url", (done) => {
        const google = new Url({
            originalUrl: 'https://google.com',
            shortUrl: 'https://localhost/google',
            shortId: "1",
            createdAt: Date.now()
        });
        google.save()
            .then(() => {
                // has the url been saved successfully.
                assert(!google.isNew);
                done();
            });
    });
});
