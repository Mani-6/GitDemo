const seneca = require("seneca")({ log: "quiet" });
const entity = require("seneca-entity");
const mongoStore = require("seneca-mongo-store");

seneca
    .use(entity)
    .use(mongoStore, {
        name: "ishare",
        host: "127.0.0.1",
        port: "27017",
    })
    .use(require("./article_plugin"), {options:"optional"})
    .ready((err) => seneca.listen(9000));