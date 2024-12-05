$(document).ready(function () {
    var currentFileArr = document.location.href.match(/[^\/]+$/);
    var currentFile = currentFileArr != null ? currentFileArr[0] : "index.html";
    $("body > header").load("header.html", function () {
        $('header nav a').each(function() {
            // Check if the link's href matches the current URL
            if (currentFile.indexOf($(this).attr('href')) >= 0) {
                // Add the 'active' class to the matching link
                $(this).addClass('current-page');
            }
        });
    });

    $("body > footer").load("footer.html", function() {
        $("#copyright-year").html(new Date().getFullYear());
    });

    $("#contact").on("submit", function(event) {
        event.preventDefault();

        var formData = {
            'user_name': $('input[name=user_name]').val(),
            'user_email': $('input[name=user_email]').val(),
            'user_subject': $('input[name=user_subject]').val(),
            'user_msg': $('textarea[name=user_msg]').val(),
        };
        // console.log(formData);

        $.ajax({
            url: "https://amusementman.com/phpmailer/",
            type: "post",
            data: formData,
            success: function(d) {
                var json = JSON.parse(d);
                var type = json.type;
                var text = json.text;
                alert(text);
            }
        });
    });
});