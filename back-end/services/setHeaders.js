const setHeaderFor200 = (res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'application/json');
}

module.exports = {
    setHeaderFor200,
}