var app = angular.module("myApp", [])
.filter("random", function() {
    return function(value) {        
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
