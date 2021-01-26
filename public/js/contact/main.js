$(document).ready(function(){


    var contactForm=$('#contact-form');
    contactForm.submit((e)=>{
        e.preventDefault();
    $.ajax( {
        url:"/contact",
        type: 'POST',  // http method
        data: contactForm.serialize(),  // data to submit
        success: function (data) {
        $('.notification').show();
        $('.notification').append('Message Sent')
           
        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    });
});

});