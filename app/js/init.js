//modal init
var modalBtn = $('[data-modal]');
modalBtn.on('click', function (e) {
    e.preventDefault();
    var target = $(this).attr('data-target');
    $(target).bPopup();

    // form element styler init
    $('select').styler();

});