/**
 * Created by maximecaron on 2016-03-05.
 */
$(document).ready(function(){
    $("button").click(function(){
        $.get("/picture", {date: $(".date").val(), message: $(".message").val(), random: Math.random()},
            function(image){
                $(".post").attr("src", image);
                $(".post").attr("class", "post well center-block");
            }
        );
    });
});

$(document).keypress(function(e) {
    if(e.which == 13) {
        var rand_nbr = Math.random()
        $.get("/picture", {date: $(".date").val(), message: $(".message").val(), random: rand_nbr},
            function(image){
                $(".facebook-meta-pic").attr("content", "https://vintageamericanways.com/wp-content/themes/vintageamericanways-2135/images/flag.png")
                $(".post").attr("src", image);
                $(".post").attr("class", "post well center-block");
            }
        );
    }
});
