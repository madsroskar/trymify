if (!String.prototype.trym) {

    function getPotato(type) {
        switch(type) {
            case "roasted":
                return "🍠";
            default:
                return "🥔";
        }
    }

    String.prototype.trym = function(type = "normal") {
       return getPotato(type).repeat([...this].length);
    }
}
