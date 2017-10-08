(function ($) {
    const shade = "#f00";
    $.fn.greenify = function() {
        this.css( "color", shade );
        return this;
    };
}(jQuery));