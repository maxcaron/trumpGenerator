/**
 * Created by maximecaron on 2016-03-05.
 */
$(document).ready(function(){
    $("button").click(function(){
        $.get("/picture",
            {date: $(".date").val(), message: $(".message").val()},
            function(image){
                $(".post").attr("src", image);
                $(".post").attr("class", "post well center-block");
            });
    });
});