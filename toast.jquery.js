(function($){
    $.toast = function(options) {
        var settings = $.extend({
            message: '',
            callback: function(){}
        }, options);

        var toast = $('<div class="msg-popup" '
            + 'style="position:fixed;padding:10px 20px;margin:0 auto;text-align:center;display:none;'
            + 'z-index:2000;border:5px solid #EEEEEE;background-color:#FFFACD"><span>'
            + settings.message + '</span></div>'
        );
        $('body').append(toast);
        var popupWidth = toast.width();
        var windowWidth = document.body.clientWidth;
        toast.css({
            'top' : 200,
            'left' : windowWidth / 2 - popupWidth / 2
        });
        toast.fadeIn(1000, function() {
            toast.fadeOut(2000, function() {
                toast.remove();
                settings.callback();
            })
        });
    }
}(jQuery));
