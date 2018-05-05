$(document).ready(function () {
    var $listitems = $('.btn-group button');
    $listitems.click(function () {
        $listitems.removeClass('active');

        $(this).addClass('active');

    });
    $listitems.mouseover(function () {
        $listitems.show();



    });


});