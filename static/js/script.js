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
                $(".facebook-meta-pic").attr("content", "http://2.bp.blogspot.com/-AyU9i3PLNv0/VnsbqDxQQpI/AAAAAAAA7ac/u4-OrAvFqwA/s1600/DonaldTrump-funnyface-GOP-debate-15Dec2015.jpg")
                $(".post").attr("src", image);
                $(".post").attr("class", "post well center-block");
            }
        );
    }
});
