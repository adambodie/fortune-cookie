var app = angular.module("myApp", [])
.filter("length", function() {
    return function(value) {
        return value.length;
    }
}).filter("random", function() {
    return function(value) {
        var fortune = [
        "Today you will inspire others with laughter.",
        "You are wise beyond your years, don't let it go to waste.",
        "You will reunite with an old friend soon.",
        "An exotic adventure is on the horizon.",
        "You will be very successful at work this month.",
        "Someone passionate about you will help you out when you need it.",
        "Relax a little, you are working way too hard.",
        "Enjoy the little things in life, you will be surprised in their effect.",
        "Be sure to eat fruit this week, it will make you healthy.",
        "You may not like the advice you hear from a loved one, but it will help you out.  Take it.",
        "Bad luck and misfortune will forever torment your pathetic soul for all eternity.",
        "You will find happiness with a new love.",
        "Proper diet and exercise will help you out more than you think.",
        "You will get a promotion at work a week from now.",
        "Be on the lookout for something special in the mail.",
        "Keep up the effort in your studies.  You're on your way to greatness.",
        "Your four favorite things today will be flour, sugar, vanilla and oil.  Remember that.",
        "Life is like a box of chocolates.  Be careful which one you take.",
        "A nice walk in your neighborhood will help relieve your stress.",
        "You know that chance you've wanted to take?  Today's a good day to take that chance!",
        "You will impress someone with your infectious humor and heart.",
        "You should find some extra time to please your spouse or loved one.",
        "It's important that you listen to what you're being told; it will push you to greatness.",
        "This weekend would be a good time to take a moment and meditate.  It will help you clear your mind.",
        "Music is the key to happiness, take a moment to embrace the message.",
        "If you have any major problems to fix, now would be a good time to fix them.",
        "Reach out to someone from your past.  You may be surprised by how much they can inspire you.",
        "Don't spend all day watching the TV, go outside and get some fresh air.",
        "Take an extra look at your work.  Sometimes it's best to make sure it's done correctly.",
        "If you're feeling down, find someone to hug.",
        "Bring an extra sweater when you're out in the cold.  It will help you stay warm.",
        "Always carry sunscreen wherever you go.  The sun can be deadly.",
        "Take a drive to Delaware if you can.  You'll be amazed.",
        "Listen to your pet.  Not just physically but emotionally.  You'll be impressed.",
        "The value of a hard earned penny is more than the value of the penny itself.  Cherish it.",
        "Don't judge a book by its cover, you'll understand why when presented with an interesting situation.",
        "It never hurts to stand outside for a few minutes and look at the stars.",
        "The only thing stopping you from having a perfect day is not smiling.  Put on your best smile.",
        "It never hurts to speak up, even if you think it's a stupid question.",
        "Try something new today.  The adventures it can lead to in the future are endless.",
        "Better days are ahead, don't let your obstacles overpower you.",
        "Why fly when you can enjoy the open road?",
        "It's never too late to fix a situation that's been bothering you for a while.",
        "It takes two to tango, remember that the next time someone wants you to do all the work.",
        "If life is getting you down, remember that other people have it more rough than you.",
        "Life is too short to dwell on negative things.  Enjoy yourself.",
        "One man's trash is another person's treasure.  Remember that the next time you want to throw something in the trash.",
        "It never hurts to double-check your work, or to have someone check it for you.",
        "Helping someone out who needs it will not only benefit them, but make you feel like you've made a difference.",
        "Recycling is good for the earch, and good for the soul.",
        "Time flies when you're having fun.  Cherish every moment of it.",
        "Now is a good time to clean out your closet.  There's nothing wrong with a little organization.",
        "Just because it's raining outside doesn't mean you can't have any fun.",
        "Why don't you take a minute and enjoy your morning coffee.",
        "When trouble calls, don't panic and be sure to consider all your options."

        ];
        var paper = Math.floor(value * Math.random()) + 1;
        if (paper > (fortune.length - 1)) {
            paper = (fortune.length - 1);
        }
        if (paper < 0) {
            paper = 0;
        }
        var cookie = fortune[paper];
        return cookie;
    }
});
