$(document).ready(info);


function info() {
    var email = 'ckim618@gmail.com';
    var phone = '909-615-3529';
    
    $('.phoneNum').text(phone);
    $('.email').text(email).attr('href', 'mailto:' + email);
}