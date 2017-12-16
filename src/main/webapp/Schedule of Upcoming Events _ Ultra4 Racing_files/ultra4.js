/**
 * Created by Matt on 8/22/2016.
 */
(function($){
    $(document).ready(function() {
            var pos = ($('.headerblock').width()/2)-50;
            $('.headerblock').css({"background-position":pos + "px"});

            $('a.sponsor[rel="track"]').each(function(index) {
//                var sponsor = $(this).attr('title').split('*');
//                $(this).attr('title',sponsor[0]);
//                $(this).attr('data-id',sponsor[1]);
                $(this).on("click",function() {
                    $.post('/sponsors/clicktrack',{sponsor:$(this).attr('title')});
 //                   console.log(this);
 //                   alert('Track '+$(this).attr('title'));
//                    return false;
                });
            });

        }
    );
}) (jQuery);