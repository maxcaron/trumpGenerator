/**
 * Created by maximecaron on 2016-03-05.
 */
$(document).ready(function(){
    $("button").click(function(){
        $.get("http://127.0.0.1:5000/picture",
            {date: $(".date").val(), message: $(".message").val()},
            function(image){
                $(".post").attr("src", image);
                $(".post").attr("class", "post well center-block");
            });
    });
});