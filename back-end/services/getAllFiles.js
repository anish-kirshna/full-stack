const fs = require('fs');

/*
    Get all files in a directory
*/
const getAllFiles = () => {
    const path = '../data';
    const files = fs.readdirSync(path, { withFileTypes: true});
    return files.map(file => file.name);
}

module.exports = {
    getAllFiles,
};