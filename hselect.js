;
(function($, window, document, undefined) {
    $.fn.hselect = function(aORb, options) {
        var swicth;
        if (aORb == 'a') {
            swicth = '::after';
        } else if (aORb == 'b') {
            swicth = '::before';
        } else {
            console.log('请传入第一个参数a或者b确定修改的伪元素类型（a = after，b = before）。');
            return;
        }
        // var defaults = "content:'defaults;'";
        // var settings = $.extend(defaults, options);
        return this.each(function(i) {
            // var $hId = parseInt(9999*Math.random());
            var d = new Date();
            var $hId = d.getTime();
            console.log($hId);
            $(this).addClass('hselect_' + $hId);
            $('head').append('<style id="style_' + $hId + '" type="text/css">');
            $('#style_' + $hId).text('.hselect_' + $hId + swicth + '{' + options + '}');
        });
    };
})(jQuery, window, document);
