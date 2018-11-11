 $(document).ready(function(){
/*    $('.area > .container > div.menu > ul > li').click(function(event){*/
    $('.visible').click(function(event){
            event.preventDefault();
        
        var li = $(this).parent().parent();
        var li_active = li[0];
        var li_false;
        $('.area > .container > div.menu > ul > li').each(function(){
            li_false = this;
            $(li_false).find('.invisible').each(function(){
                if( $(this).hasClass('slider') ) {
                    $(this).slideUp();
                    $(this).removeClass('slider');
                } else {
                    if(li_false == li_active) {
                        $(this).addClass('slider');
                        $(this).slideDown();
                    }
                }
            });
        });
        return false;
    });
}); 