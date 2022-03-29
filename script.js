$(document).ready(function(){
    $("#para").text("Hello, <i>printed</i> from jquery")

    $("#inp").val("javascript");
    $("img").attr("src","tenor.gif");

    $("#btn").click(function(){
        $("img").remove()
    })
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        success: function(data){
            data.forEach(element => {
                $("#para").append(element.title + "<br>")
            });
        },
        error: function(){
            $("#para").append("Some problme in fetching data")
        }
    })
});






