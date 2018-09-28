if (!String.prototype.trym) {
    String.prototype.trym = function() {
       return this.replace(new RegExp(".", "gm"), "🥔")
    }
}
