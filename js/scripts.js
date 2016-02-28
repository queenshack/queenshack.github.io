$(function() {
    var container_width = 115 * $(".mobbar a").length;
    $(".mobbar").css("width", container_width);
    $(".people-ticker").typed({
        stringsElement: $('#peopleArray'),
        contentType: 'html',
        typeSpeed: 3,
        backDelay: 1500,
        showCursor: false,
        loop: true
    });
    $(".people-tickerM").typed({
        stringsElement: $('#peopleArray'),
        contentType: 'html',
        typeSpeed: 3,
        backDelay: 1500,
        showCursor: false,
        loop: true
    });

    $('#logo').click(function(e) {
        location.reload();
    });

    routie('info', function() {
        if ($('#infoBtn').position().left == 0 && $('#infoBtn').position().top == 0)
            var pos = $('#infoBtnM').position();
        else
            var pos = $('#infoBtn').position();
        goGold();
        addTouch(pos, 'gold');
        switchPage('info');
    });

    routie('faq', function() {
        if ($('#faqBtn').position().left == 0 && $('#faqBtn').position().top == 0)
            var pos = $('#faqBtnM').position();
        else
            var pos = $('#faqBtn').position();
        goWhite();
        addTouch(pos, 'white');
        switchPage('faq');
    });

    routie('schedule', function() {
        if ($('#scheduleBtn').position().left == 0 && $('#scheduleBtn').position().top == 0)
            var pos = $('#scheduleBtnM').position();
        else
            var pos = $('#scheduleBtn').position();
        goGold();
        addTouch(pos, 'gold');
        switchPage('schedule');
    });

    routie('sponsors', function() {
        if ($('#sponsorsBtn').position().left == 0 && $('#sponsorsBtn').position().top == 0)
            var pos = $('#sponsorsBtnM').position();
        else
            var pos = $('#sponsorsBtn').position();
        goWhite();
        addTouch(pos, 'white');
        switchPage('sponsors');
    });

    routie('attend', function() {
        if ($('#attendBtn').position().left == 0 && $('#attendBtn').position().top == 0)
            var pos = $('#attendBtnM').position();
        else
            var pos = $('#attendBtn').position();
        goGold();
        addTouch(pos, 'gold');
        switchPage('attend');
    });
});

function goInfo(e) {
    console.log(e)
    addTouch(e, 'gold');
    switchPage('info');
}

function addTouch(e, variant) {
    if (variant === 'gold') {
        var color = '#fcb914';
    } else {
        var color = '#ffffff';
    }

    var div = $('<div>').css({
        "position": "absolute",
        "left": e.left + 20,
        "top": e.top + 20,
        "background-color": color,
        "border-radius": "50%",
        "width": "20px",
        "height": "20px"
    });
    $(document.body).css('overflow', 'hidden');
    $(document.body).append(div);
    setTimeout(function() { div.addClass('ripple'); }, 20);
    setTimeout(function() { div.addClass('ripple2'); }, 200);
    setTimeout(function() {
        $('.ripple').remove();
        $('#canvas').css('background-color', color);
        $(document.body).removeAttr('style');
    }, 400)
}

function goWhite() {
    $('#attendBtn, #attendBtnM').removeClass('qhgold-text white selected').addClass('qhgold');
    $('.link').css('color', '#fcb914');
    $('.link').removeClass('whiteLink').addClass('goldLink');
}

function goGold() {
    $('#attendBtn, #attendBtnM').removeClass('qhgold').addClass('qhgold-text white');
    $('.link').css('color', '#ffffff');
    $('.link').removeClass('goldLink').addClass('whiteLink');
}

function switchPage(page) {
    $('.page').fadeOut();
    $('.link').removeClass('selected');
    $('.link').removeClass('selectedWhiteLink');
    $('.link').removeClass('selectedGoldLink');
    if (page === 'info') {
        $('#infoBtn').removeClass('whiteLink').addClass('selected selectedWhiteLink');
        setTimeout(function(e) {
            $('.info-page').fadeIn(600);
        }, 400)
    } else if (page === 'faq') {
        $('#faqBtn').removeClass('goldLink').addClass('selected selectedGoldLink');
        setTimeout(function(e) {
            $('.faq-page').fadeIn(600);
        }, 400)
    } else if (page === 'schedule') {
        $('#scheduleBtn').removeClass('whiteLink').addClass('selected selectedWhiteLink');
        setTimeout(function(e) {
            $('.schedule-page').fadeIn(600);
        }, 400)
    } else if (page == 'sponsors') {
        $('#sponsorsBtn').removeClass('goldLink').addClass('selected selectedGoldLink');
        setTimeout(function(e) {
            $('.sponsors-page').fadeIn(600);
        }, 400)
    } else {
        $('#attendBtn').addClass('selected');
        setTimeout(function(e) {
            $('.attend-page').fadeIn(600);
        }, 400)
    }
}
