$(function() {
    var ON = $('.trigger-on');
    var OFF = $('.trigger-off');

    ON.on('click', function(e) {
        e.preventDefault();

        $.ajax({
            url: 'scripts/control.php',
            type: 'POST',
            data: {action: 'on'}
        });

        $('a.active').removeClass('active');
        $(this).addClass('active');
    });

    OFF.on('click', function(e) {
        e.preventDefault();

        $.ajax({
            url: './scripts/control.php',
            type: 'POST',
            data: {action: 'off'}
        });

        $('a.active').removeClass('active');
        $(this).addClass('active');
    });
});