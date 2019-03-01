(function($){

    $(document).ready(function() {
        /* ---------------------------------------------- /*
         * Burger hide/show
        /* ---------------------------------------------- */
        $('.menu-burger').click(function(){
            $('.MenuMobile').fadeToggle();
            $( '.menu-burger' ).toggleClass('cross');
        });
        /* ---------------------------------------------- /*
         * Close nav after click (mobile only)
        /* ---------------------------------------------- */
        $('a.link').click(function(){
            if ($(window).width() < 1025) {
                $('.navigation').fadeToggle();
                $('.burger i').removeClass('fa-times');
                $('.burger i').addClass('fa-bars');
            }
        })
        /* ---------------------------------------------- /*
         * Smooth Scroll
        /* ---------------------------------------------- */
        $('.page-scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });

        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });

        /* ---------------------------------------------- /*
         * WOW Animation When You Scroll
        /* ---------------------------------------------- */

        wow = new WOW({
            mobile: false
        });
        wow.init();


        $( "#c_name" ).keypress(function() {
            let name = document.getElementById("c_name");
            let chekedName = document.getElementById("check_name");
            let warningName = document.getElementById("warning_name");

            warningName.style.display = "none";
            name.style.borderColor = "#232323";

            if(name.checkValidity()){
                chekedName.style.display = "block";
            } else {
                chekedName.style.display = "none";
                warningName.style.display = "block";
                name.style.borderColor = "#ea5a5a";
            }
        });

        $( "#c_phone" ).keypress(function() {
            let phone = document.getElementById("c_phone");
            let chekedPhone = document.getElementById("check_phone");
            let warningPhone = document.getElementById("warning_phone");

            warningPhone.style.display = "none";
            phone.style.borderColor = "#232323";

            if(phone.checkValidity()) {
                chekedPhone.style.display = "block";
            } else {
                chekedPhone.style.display = "none";
                warningPhone.style.display = "block";
                phone.style.borderColor = "#ea5a5a";
            }
        });
        $( "#c_email" ).keypress(function() {
            let email = document.getElementById("c_email");
            let chekedEmail = document.getElementById("check_email");
            let warningEmail = document.getElementById("warning_email");

            warningEmail.style.display = "none";
            email.style.borderColor = "#232323";

            if(email.checkValidity()) {
                chekedEmail.style.display = "block"
            } else {
                chekedEmail.style.display = "none";
                warningEmail.style.display = "block";
                email.style.borderColor = "#ea5a5a";
            }
        });

        $( "#fb_name" ).keypress(function() {
            let name = document.getElementById("fb_name");
            let chekedName = document.getElementById("check_nameFeedback");
            let warningName = document.getElementById("warning_nameFeedback");

            warningName.style.display = "none";
            name.style.borderColor = "#232323";

            if(name.checkValidity()){
                chekedName.style.display = "block";
            } else {
                chekedName.style.display = "none";
                warningName.style.display = "block";
                name.style.borderColor = "#ea5a5a";
            }
        });

        $( "#fb_phone" ).keypress(function() {
            let phone = document.getElementById("fb_phone");
            let chekedPhone = document.getElementById("check_phoneFeedback");
            let warningPhone = document.getElementById("warning_phoneFeedback");

            warningPhone.style.display = "none";
            phone.style.borderColor = "#232323";

            if(phone.checkValidity()) {
                chekedPhone.style.display = "block";
            } else {
                chekedPhone.style.display = "none";
                warningPhone.style.display = "block";
                phone.style.borderColor = "#ea5a5a";
            }
        });
        $( "#fb_email" ).keypress(function() {
            let email = document.getElementById("fb_email");
            let chekedEmail = document.getElementById("check_emailFeedback");
            let warningEmail = document.getElementById("warning_emailFeedback");

            warningEmail.style.display = "none";
            email.style.borderColor = "#232323";

            if(email.checkValidity()) {
                chekedEmail.style.display = "block"
            } else {
                chekedEmail.style.display = "none";
                warningEmail.style.display = "block";
                email.style.borderColor = "#ea5a5a";
            }
        });

        $( "#sv_name" ).keypress(function() {
            let name = document.getElementById("sv_name");
            let chekedName = document.getElementById("check_nameService");
            let warningName = document.getElementById("warning_nameService");

            warningName.style.display = "none";
            name.style.borderColor = "#232323";

            if(name.checkValidity()){
                chekedName.style.display = "block";
            } else {
                chekedName.style.display = "none";
                warningName.style.display = "block";
                name.style.borderColor = "#ea5a5a";
            }
        });

        $( "#sv_phone" ).keypress(function() {
            let phone = document.getElementById("sv_phone");
            let chekedPhone = document.getElementById("check_phoneService");
            let warningPhone = document.getElementById("warning_phoneService");

            warningPhone.style.display = "none";
            phone.style.borderColor = "#232323";

            if(phone.checkValidity()) {
                chekedPhone.style.display = "block";
            } else {
                chekedPhone.style.display = "none";
                warningPhone.style.display = "block";
                phone.style.borderColor = "#ea5a5a";
            }
        });
        $( "#sv_email" ).keypress(function() {
            let email = document.getElementById("sv_email");
            let chekedEmail = document.getElementById("check_emailService");
            let warningEmail = document.getElementById("warning_emailService");

            warningEmail.style.display = "none";
            email.style.borderColor = "#232323";

            if(email.checkValidity()) {
                chekedEmail.style.display = "block"
            } else {
                chekedEmail.style.display = "none";
                warningEmail.style.display = "block";
                email.style.borderColor = "#ea5a5a";
            }
        });
        /* ---------------------------------------------- /*
         * E-mail validation
        /* ---------------------------------------------- */

        // function isValidEmailAddress(emailAddress) {
        //     var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        //     return pattern.test(emailAddress);
        // };

        /* ---------------------------------------------- /*
         * Contact form ajax
        /* ---------------------------------------------- */

        // $('#contact-form').submit(function(e) {
        //
        //     e.preventDefault();
        //
        //     var c_name = $('#c_name').val();
        //     var c_email = $('#c_email').val();
        //     var c_phone = $('#c_phone').val();
        //     var response = $('.ajax-response');
        //
        //     var formData = {
        //         'name'       : c_name,
        //         'email'      : c_email,
        //         'message'    : c_message
        //     };
        //
        //     if (( c_name== '' || c_email == '' || c_phone == '') || (!isValidEmailAddress(c_email) )) {
        //         console.log("error")
        //         response.fadeIn(500);
        //         response.html('<i class="fa fa-warning error"></i> <span class="error">Please fix the errors and try again.</span>');
        //     }
        //
        //     else {
        //         console.log(formData);
        //         $.ajax({
        //             type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
        //             url         : 'assets/php/contact.php', // the url where we want to POST
        //             data        : formData, // our data object
        //             dataType    : 'json', // what type of data do we expect back from the server
        //             encode      : true,
        //             success		: function(res){
        //                 var ret = $.parseJSON(JSON.stringify(res));
        //                 response.html(ret.message).fadeIn(500);
        //                 // response.style.display = "flex"
        //             }
        //         });
        //     }
        //     return false;
        // });

        $( "#first-button" ).click(function() {
            // show and hide button
            if ($(this)) {
                $(this).toggle();
            }
            //show container
            $( "#first" ).toggle();
            //set container new height
            $("#service").css( "height", "2610px" );
            //show the next button
            $("#second-button").css( "display", "flex" );
        });

        $( "#second-button" ).click(function() {
            // show and hide button
            if ($(this)) {
                $(this).toggle();
            }
            //show container
            $( "#second" ).toggle();
            //set container new height
            $("#service").css( "height", "3550px" );
            //show the next button
            $("#third-button").css( "display", "flex" );
        });

        $( "#third-button" ).click(function() {
            // show and hide button
            if ($(this)) {
                $(this).toggle();
            }
            //show container
            $( "#third" ).toggle();
            //set container new height
            $("#service").css( "height", "4340px" );
            //show the next button
            $("#fourth-button").css( "display", "flex" );
        });

        $( "#fourth-button" ).click(function() {
            // show and hide button
            if ($(this)) {
                $(this).toggle();
            }
            //show container
            $( "#fourth" ).toggle();
            //set container new height
            $("#service").css( "height", "4990px" );
            //show the next button
            $("#fives-button").css( "display", "flex" );
        });

        $( "#fives-button" ).click(function() {
            // show and hide button
            if ($(this)) {
                $(this).toggle();
            }
            //show container
            $( "#five" ).toggle();
            //set container new height
            $("#service").css( "height", "5500px" );
        });

        $('.feedbackModal').click(function () {
            $('#modalFeedback').toggle()
        })
        $('#closeModal').click(function () {
            $('#modalFeedback').toggle()
        })
        $('#closeModalThx').click(function () {
            $('#modalThx').toggle()
        })
        $('#sendFeedback').click(function () {
            $('#modalFeedback').toggle()
            $('#modalThx').toggle()
        })
        $('button.button').click(function () {
            $('#modalService').toggle()
        })
        $('#closeModalService').click(function () {
            $('#modalService').toggle()
        })
        $('#sendService').click(function () {
            $('#modalService').toggle()
            $('#modalThx').toggle()
        })
    });


})(jQuery);