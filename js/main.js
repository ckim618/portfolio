$(document).ready(initialize);

function initialize() {
    clickHandler();
    info();
}


function clickHandler() {
    $('.code').on('click', function() {
        console.log('Code Clicked');
    });
    $('.live').on('click', function() {
        console.log('Live Clicked')     
    });
}

function info() {
    var email = 'ckim618@gmail.com';
    var phone = '909-615-3529';
    var linkedin = 'https://www.linkedin.com/in/ckim618'

    $('.email').text(email).attr('href', 'mailto:' + email); 
    $('.linkedin').attr('href', linkedin);        
    $('.phoneNum').text(phone);
}
