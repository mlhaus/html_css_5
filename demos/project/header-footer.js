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
    $("body > footer").load("footer.html");
});