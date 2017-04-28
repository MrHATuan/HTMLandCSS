$( document ).ready( function() {
    // js header nav
    $("button#icon_menu").click(function(e) {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('#page #ovelay-bg').css('display','none');
            $("#menu").removeClass('active');
        } else {
            $(this).addClass('active');
            $('#page #ovelay-bg').css('display','block');
            $("#menu").addClass('active');
        }
    })
    $('#page #ovelay-bg').click(function(e) {
        $('#page #ovelay-bg').css('display','none');
        $("#icon_menu").removeClass('active');
        $("#menu").removeClass('active');
    });
    $(window).scroll(function(event){
        if($("#icon_menu").hasClass('active')){ 
            $("#icon_menu").removeClass('active');
            $('#page #ovelay-bg').css('display','none');
            $("#menu").removeClass('active');
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