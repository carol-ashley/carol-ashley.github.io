// Generated by CoffeeScript 1.12.2
(function() {
  var waterfall, wheel, wheelTimeout;

  wheelTimeout = 5000;

  waterfall = function() {
    return $(".waterfall").css({
      "opacity": "0",
      "top": "-1em"
    }).animate({
      opacity: 1,
      top: 0
    }, {
      duration: 1000
    });
  };

  wheel = function(curr) {
    return curr.animate({
      opacity: 0,
      left: "-10em"
    }, {
      duration: 500,
      done: function() {
        var next;
        curr.hide();
        if (curr.is($(".wheel").children().last())) {
          next = $(".wheel").children().first();
        } else {
          next = curr.next();
        }
        return next.show().css({
          "opacity": "0",
          "left": "10em"
        }).animate({
          opacity: 1,
          left: 0
        }, {
          duration: 500,
          done: setTimeout((function() {
            return wheel(next);
          }), wheelTimeout)
        });
      }
    });
  };

  $(document).ready(function() {
    waterfall();
    return window.setTimeout((function() {
      return wheel($(".wheel").children().first());
    }), wheelTimeout);
  });

}).call(this);