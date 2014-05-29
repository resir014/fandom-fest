//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar-intro").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Random tagline generator
$(function () {
    var randomSplash = new Array();

    //add random splash texts here
    randomSplash[0]     = "You're waiting for Guardians of the Galaxy? Us too. <br /> Join us.";
    randomSplash[1]     = "No winter here. Tropical country. Sorry Ned.";
    randomSplash[2]     = "Did somebody shoot the owls? We've been waiting for the Hogwarts letters since 1997.";
    randomSplash[3]     = "It's going to be FANTASTIC meeting all of you.";
    randomSplash[4]     = "Please park your broom/TARDIS/De Lorean/Milennium Falcon/USS Enterprise properly.";
    randomSplash[5]     = "Don't let the Angels take the Phone Box. Or your phone. Or your significant others.";
    randomSplash[6]     = "Oh, dear. Did Carlos cut his hair again?";
    randomSplash[7]     = "At what time do you think Thorin wakes up in the morning in order to braid his hair?";
    randomSplash[8]     = "*whispers* Hail HYDRA!";
    randomSplash[9]     = "Looking for hiatus buddy? We’re professionals.";
    randomSplash[10]    = "When Albion is greatest, FandomFest shall rise again.";
    randomSplash[11]    = "No rude people.";
    randomSplash[12]    = "By the way, did we also mention that we travel in space and time?";
    randomSplash[13]    = "Ship it. Ship it real good.";
    randomSplash[14]    = "And now, the weather.";
    randomSplash[15]    = "Let’s settle Rama/Ucok and Bejo/Ucok with Rama/Bejo/Ucok.";

    var generateRandomNumber = Math.floor(Math.random()*randomSplash.length);

    $('#randomSplash').html(randomSplash[generateRandomNumber]);
});

//Call the Affix plugin
$('.sidebar-wrapper').affix({
    offset: {
        top: 100,
        bottom: function () {
            return (this.bottom = $('.footer').outerHeight(true))
        }
    }
});
