const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/url-shortener');
mongoose.connection
    .once('open', () => console.log('Connected to MongoDB'))
    .on('error', error => {
        console.warn('Warning', error);
    }
);
// A hook to drop users from database before each test.
// Done is a callback that tells mocha that the test is done 
// and the next test can run.
beforeEach((done) => {
    mongoose.connection.collections.urls.drop(() => {
        // Ready to run the next test.
        done();
    })
})