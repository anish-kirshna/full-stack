const http = require('http');
const services = require('./services/index');
const { METHODS } = require('./constants/generic-constants');
console.log(services);
const server  = http.createServer((req,res) => {
    const { url, method } = req;
    switch(method) {
        case METHODS.GET:
            if(url === '/') {
                services.setHeaderFor200(res);
                res.end(JSON.stringify(services.getAllFiles()));
            }
    }
});

server.listen(3000, () => console.log(`Listening at PORT ${3000}`));