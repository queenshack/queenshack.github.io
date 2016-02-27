$(function() {
    $(".people-ticker").typed({
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

    $('#infoBtn').click(function(e) {
        goGold();
        addTouch(e, 'gold');
        switchPage('info');
    });

    $('#faqBtn').click(function(e) {
        goWhite();
        addTouch(e, 'white');
        switchPage('faq');
    });

    $('#scheduleBtn').click(function(e) {
        goGold();
        addTouch(e, 'gold');
        switchPage('schedule');
    });

    $('#sponsorsBtn').click(function(e) {
        goWhite();
        addTouch(e, 'white');
        switchPage('sponsors');
    });

    $('#attendBtn').click(function(e) {
        $(this).removeClass('qhgold').addClass('qhgold-text white selected');
        goGold();
        addTouch(e, 'gold');
        switchPage('attend');
    })
});

function addTouch(e, variant) {
    if (variant === 'gold') {
        var color = '#fcb914';
    } else {
        var color = '#ffffff';
    }

    var div = $('<div>').css({
        "position": "absolute",
        "left": e.pageX + 'px',
        "top": e.pageY + 'px',
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
    $('#attendBtn').removeClass('qhgold-text white selected').addClass('qhgold');
    $('.link').css('color', '#fcb914');
    $('.link').removeClass('whiteLink').addClass('goldLink');
}

function goGold() {
    $('#attendBtn').removeClass('qhgold').addClass('qhgold-text white');
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
            $('#registrationForm').focus()
        }, 400)
    }
}
