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
    randomSplash[10]    = "Are we still waiting for Sherlock? How long do we have to wait?";
    randomSplash[11]    = "Sherlock, for the last time, you're not bloody Godot.";
    randomSplash[12]    = "Do you think the Doctor would like his kidneys by the time of the premiere? <br /> Find out with us.";
    randomSplash[13]    = "Do you split your sides laughing like Beverly Katz did?";
    randomSplash[14]    = "Nothing here is vegetarian. <br /> We are all humanitarian.";
    randomSplash[15]    = "By the way, did we also mention we travel in space and time?";
    randomSplash[16]    = "GOOD LORD, SIMON.";
    randomSplash[17]    = "Now isn't the winter of our discontent (yet).";
    randomSplash[18]    = "And now, the weather.";

    var generateRandomNumber = Math.floor(Math.random()*randomSplash.length);

    $('#randomSplash').html(randomSplash[generateRandomNumber]);
});

//Call the Scrollspy plugin
$('body').scrollspy({ target: '.sidebar-wrapper' });

//Call the Affix plugin
$('.sidebar-wrapper').affix({
    offset: {
      top: 100,
      bottom: function () {
        return (this.bottom = $('.footer').outerHeight(true))
      }
    }
  });
