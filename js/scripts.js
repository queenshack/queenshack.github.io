$(function() {
    $(".people-ticker").typed({
        stringsElement: $('#peopleArray'),
        contentType: 'html',
        typeSpeed: 3,
        backDelay: 1500,
        showCursor: false,
        loop: true
    });
});
