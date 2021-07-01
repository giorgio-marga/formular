
$.fn.checkInvalid = function() {
    if( $(this).is(':invalid') ) {
        $(this).addClass('input-textarea-invalid');
    }
};

$('form').on('focusout', '#input-name', function() {
    $('#input-name').checkInvalid();
});

$('form').on('focusout', '#input-email', function() {
    $('#input-email').checkInvalid();
});

$('form ').on('focusout', '#textarea-msg', function() {
    $('#textarea-msg').checkInvalid();
});
