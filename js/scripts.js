$(function() {
    $(".people-ticker").typed({
        stringsElement: $('#peopleArray'),
        contentType: 'html',
        typeSpeed: 3,
        backDelay: 1500,
        showCursor: false,
        loop: true
    });

    $('#infoBtn').click(function(e) {
        goGold();
        var touch = {
            pageX: e.pageX,
            pageY: e.pageY,
            identifier: 'ripple_' + Math.random() + '__ripple'
        }
        addTouch(touch, 'gold');
        setTimeout(dropTouch(touch), 100)
        switchPage('info');
    });

    $('#faqBtn').click(function(e) {
        goWhite();
        var touch = {
            pageX: e.pageX,
            pageY: e.pageY,
            identifier: 'ripple_' + Math.random() + '__ripple'
        }
        addTouch(touch, 'white');
        setTimeout(dropTouch(touch), 100)
        switchPage('faq');
    });

    $('#scheduleBtn').click(function(e) {
        goGold();
        var touch = {
            pageX: e.pageX,
            pageY: e.pageY,
            identifier: 'ripple_' + Math.random() + '__ripple'
        }
        addTouch(touch, 'gold');
        setTimeout(dropTouch(touch), 100)
        switchPage('schedule');
    });

    $('#sponsorsBtn').click(function(e) {
        goWhite();
        var touch = {
            pageX: e.pageX,
            pageY: e.pageY,
            identifier: 'ripple_' + Math.random() + '__ripple'
        }
        addTouch(touch, 'white');
        setTimeout(dropTouch(touch), 100)
        switchPage('sponsors');
    });

    $('#attendBtn').click(function(e) {
        $(this).removeClass('qhgold').addClass('qhgold-text white selected');
        goGold();
        var touch = {
            pageX: e.pageX,
            pageY: e.pageY,
            identifier: 'ripple_' + Math.random() + '__ripple'
        }
        addTouch(touch, 'gold');
        setTimeout(dropTouch(touch), 100)
        switchPage('attend');
    })
});

var slowMo = false;
var dur = slowMo ? 5000 : 400;
var players = {};
var hue = 0;

function addTouch(e, variant) {
    if (variant === 'gold')
        var color = '#fcb914';
    else
        var color = 'white';
    var el = document.createElement('div');
    el.classList.add('ripple');
    el.style.background = color;
    var trans = 'translate(' + e.pageX + 'px,' + e.pageY + 'px) '
    console.log(trans);
    var player = el.animate([{
        opacity: 0.5,
        transform: trans + "scale(0) "
    }, {
        opacity: 1.0,
        transform: trans + "scale(2) "
    }], {

        duration: dur

    });
    player.playbackRate = 0.1;
    players[e.identifier || 'mouse'] = player;

    document.body.appendChild(el);
    player.onfinish = function() {
        if (!document.querySelector('.ripple ~ .pad')) each(document.getElementsByClassName('pad'), function(e) {
            e.remove();
        });
        el.classList.remove('ripple');
        el.classList.add('pad');
    }
}

function dropTouch(e) {
    players[e.identifier || 'mouse'].playbackRate = 1;
}

function each(l, fn) {
    for (var i = 0; i < l.length; i++) {
        fn(l[i]);
    }
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
    if (page === 'info') {
        setTimeout(function(e) {
            $('.info-page').fadeIn();
        }, 400)
    } else if (page === 'faq') {
        setTimeout(function(e) {
            $('.faq-page').fadeIn();
        }, 400)
    } else if (page === 'schedule') {
        setTimeout(function(e) {
            $('.schedule-page').fadeIn();
        }, 400)
    } else if (page == 'sponsors') {
    	console.log('shit works')
        setTimeout(function(e) {
            $('.sponsors-page').fadeIn();
        }, 400)
    } else {
        setTimeout(function(e) {
            $('.attend-page').fadeIn();
            $('#registrationForm').focus()
        }, 400)
    }
}
