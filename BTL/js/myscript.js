$( document ).ready( function() {
    // js header nav
    $("#icon-contacts").click(function(event) {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $("#contacts").removeClass('active');
        } else {
            $(this).addClass('active');
            $("#contacts").addClass('active');
            $("#icon_menu").removeClass('active');
            // $('#page #ovelay-bg').css('display','none');
            $("#menu").removeClass('active');
        }
    });
    $(".page-content").click(function(event) {
        $("#icon-contacts").removeClass('active');
        $("#contacts").removeClass('active');
        $("#icon_menu").removeClass('active');
        $("#menu").removeClass('active');
    });

    $("button#icon_menu").click(function(e) {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            // $('#page #ovelay-bg').css('display','none');
            $("#menu").removeClass('active');
        } else {
            $(this).addClass('active');
            // $('#page #ovelay-bg').css('display','block');
            $("#menu").addClass('active');
            $("#icon-contacts").removeClass('active');
            $("#contacts").removeClass('active');
        }
    })
    // $('#page #ovelay-bg').click(function(e) {
    //     $('#page #ovelay-bg').css('display','none');
    //     $("#icon_menu").removeClass('active');
    //     $("#menu").removeClass('active');
    // });

    $(window).scroll(function(event){
        if($("#icon_menu").hasClass('active')){ 
            $("#icon_menu").removeClass('active');
            // $('#page #ovelay-bg').css('display','none');
            $("#menu").removeClass('active');
        }
        if($("#icon-contacts").hasClass('active')) {
            $("#icon-contacts").removeClass('active');
            $("#contacts").removeClass('active');
        }
    });

    $("#menu span.rd-navbar-submenu-toggle").click(function(e) {
        if($(this).parents('li').hasClass('opened')){
            $(this).parents('li').removeClass('opened');
        } else {
            $('#menu').find('li').removeClass('opened');
            $(this).parents('li').addClass('opened');
        }
    });
    // end

});