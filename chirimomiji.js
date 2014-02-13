(function() {
  var appendMomiji, flutterDown, startFlutter, updatePosition;

  $(function() {
    return startFlutter(20);
  });

  startFlutter = function(numberOfMomiji) {
    var i, maple, maples, _i, _len;
    maples = (function() {
      var _i, _results;
      _results = [];
      for (_i = 1; 1 <= numberOfMomiji ? _i <= numberOfMomiji : _i >= numberOfMomiji; 1 <= numberOfMomiji ? _i++ : _i--) {
        _results.push(appendMomiji());
      }
      return _results;
    })();
    for (i = _i = 0, _len = maples.length; _i < _len; i = ++_i) {
      maple = maples[i];
      if (i % 3 === 0) {
        maple.elem.addClass("yellow");
      }
    }
    return requestAnimationFrame(function() {
      return flutterDown(maples);
    });
  };

  flutterDown = function(maples) {
    var maple, _i, _len;
    for (_i = 0, _len = maples.length; _i < _len; _i++) {
      maple = maples[_i];
      updatePosition(maple);
    }
    return requestAnimationFrame(function() {
      return flutterDown(maples);
    });
  };

  updatePosition = function(maple) {
    var left, nextX, nextY, offset, top;
    offset = maple.elem.offset();
    nextX = offset.left - maple.speedX;
    nextY = offset.top + maple.speedY;
    if (nextY > $(window).height() || nextX < 0 - maple.elem.width()) {
      top = 0 - maple.elem.height();
      left = Math.floor(Math.random() * $(window).width());
    } else {
      top = nextY;
      left = nextX;
    }
    return maple.elem.offset({
      top: top,
      left: left
    });
  };

  appendMomiji = function() {
    var maple;
    return maple = {
      speedX: Math.random(),
      speedY: Math.random() * 3,
      elem: $('<div class="maple">').css({
        position: "absolute",
        top: Math.random() * $(window).height(),
        left: Math.random() * $(window).width(),
        transform: "rotate(" + (Math.random() * 360) + "deg)"
      }).appendTo($('body'))
    };
  };

}).call(this);

/*
//# sourceMappingURL=chirimomiji.js.map
*/
