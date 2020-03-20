$('.btn-call-me').click(function(e) {
    e.preventDefault();
    $('.call-me-wrapper').css('display', 'flex');
});

$('.form__close').click(function(e) {
    e.preventDefault();
    $(this).parent().parent().parent().hide();
});

$('.form__close-btn').click(function(e) {
    e.preventDefault();
    $(this).parent().parent().parent().hide();
});

$('.form__phone').mask("+7 (999) 999-99-99");

$('.form__input').focus(function() {
    $(this).next().addClass('form__placeholder_active');
});

$('.form__input').blur(function() {
    if ($(this).val() == '') {
        $(this).next().removeClass('form__placeholder_active');
    }
});

$("#call-me").submit(function(e) {
    e.preventDefault();
    let data = $(this).serialize();
    $.ajax({
        type: 'POST',
        url: 'call-me.php',
        data: data,
                success: function(data){
                console.log('Отправлено');
            }
    });
    $(this).parent().parent().hide();
});
