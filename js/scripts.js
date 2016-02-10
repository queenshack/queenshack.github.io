$(function() {
    $(".people-ticker").typed({
        stringsElement: $('#peopleArray'),
        contentType: 'html',
        typeSpeed: 3,
        backDelay: 1500,
        showCursor: false,
        loop: true
    });

    $('#attendBtn').click(function(e) {
        $(this).removeClass('qhgold').addClass('qhgold-text white selected');
        var touch = {
            pageX: e.pageX,
            pageY: e.pageY,
            identifier: 'ripple_' + Math.random() + '__ripple'
        }
        addTouch(touch, 'gold');
        setTimeout(dropTouch(touch), 100)
        $('.welcome-message').fadeOut();
        setTimeout(function(e) {
            $('.attend-page').fadeIn();
        }, 400)
        $('#registrationForm').contentWindow.focus()
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
