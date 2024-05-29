const getAllFiles = require('./getAllFiles');
const setHeaders = require('./setHeaders');

module.exports = {
    ...getAllFiles,
    ...setHeaders
};