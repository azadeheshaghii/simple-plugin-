/// <reference path="jquery-3.3.1.js" />

(function ($) {
    $.fn.extend({
        //plugin name - animatemenu
        animateMenu: function (options) {
            debugger;
            var defaults = {
                animatePadding: 60,
                defaultPadding: 10,
                evenColor: '#ccc',
                oddColor: '#eee',
                textColor: '#EC407A',
            };

            var options = $.extend(defaults, options);

            return this.each(function () {
                debugger;
                var o = options;
                var obj = $(this);
                var items = $("li", obj);

                $("li:even", obj).css('background-color', o.evenColor);
                $("li:odd", obj).css('background-color', o.oddColor);
                $("li", obj).css('color', o.textColor);
                items.mouseover(function () {
                    $(this).animate({ paddingLeft: o.animatePadding }, 300);
                  
                    });
                   items .mouseout(function () {
                    $(this).animate({ paddingLeft: o.defaultPadding }, 300);

                   });
                //نشان  دادن دیو مخصوص به تب دوم
                $("li:eq(1)").mouseover(function () {
                    //$(this).click(function () {
                        $(".k").show();

                    //});
                });

                //نشان دادن دیو مخصوص به تب اول
                $("li:eq(0)").mouseover(function () {
                    //$(this).click(function () {
                    $(".k1").show();

                    //});
                });
            });
        }
    });
})(jQuery);

