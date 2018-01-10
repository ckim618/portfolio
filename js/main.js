$(document).ready(info);


function info() {
    var email = 'ckim618@gmail.com';
    var phone = '909-615-3529';
    var linkedin = 'https://www.linkedin.com/in/ckim618'

    $('.email').text(email).attr('href', 'mailto:' + email); 
    $('.linkedin').attr('href', linkedin);        
    $('.phoneNum').text(phone);
}