;
(function($, window, document, undefined) {
    $.fn.hselect = function(text) {
        $domId = $(this).attr("id");
        console.log($domId);
        $('head').append('<style id="style_' + $domId + '" type="text/css">');
        $('#style_' + $domId).text('#' + $domId + '::before{content:"' + text + '";}');
    };
})(jQuery, window, document);
