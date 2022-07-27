$(document).ready(function () {

    $('.contactBtn').click( function () {

        const url = 'https://api.metavas.io/contact/bionic';

        const name = $('#name').val();
        const phone = $('#phone').val();
        const email = $('#email').val();
        const subject = $('#subject').val();
        const message = $('#message').val();

        if (!name || !email || !phone || !subject || !message) {
            alert('danger', 'All fields are required')
            return false;
        }

        alert('primary', 'Sending contact message...')

        $.post( url, {
        name, phone, email, subject, message
        }).done(function (data) {
            $('#name, #phone, #email, #subject, #message').val('');
            alert('success', data.message)
        });

    })

    function alert(type, text) {
        const alert = $('.alert');
        alert.removeClass('alert-danger alert-primary alert-success').addClass('alert-'+type);
        alert.show()
        alert.text(text);
        setTimeout(function () {
            alert.hide()
        }, 5000)
    }

});