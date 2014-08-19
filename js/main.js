$(function() {
    $('.more__link-request').click(function(e) {
        e.preventDefault();
        var err = false;
        $('.err').hide();

        $('.more__form input').each(function() {
            if ($(this).val().length <= 0) {
                err = true;
                $('.err').show();
            }
        });

        if (!err) {
            $.post('/', $('.more__form').serialize(), function( data ) {
                location.href = '/thx';
            });

            $('.more__form input').val('');
            $('.mail-ok').show();
        }
    });
});