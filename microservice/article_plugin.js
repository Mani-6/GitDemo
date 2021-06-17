module.exports = function plugin(options){
    this.add({ role:"articles", op: "fetchAll" }, (msg, response) => {
        const entity = this.make$("articles");
        entity.list$({}, (err, bookList) => {
            response(null, {books:bookList});
        });
    });
};