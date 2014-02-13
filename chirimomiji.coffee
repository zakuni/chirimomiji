$ ->
  startFlutter(20)

startFlutter = (numberOfMomiji) ->
  maples = (appendMomiji() for [1..numberOfMomiji])
  for maple, i in maples
    maple.elem.addClass("yellow") if i%3==0
  requestAnimationFrame ->
    flutterDown(maples)

flutterDown = (maples) ->
  updatePosition(maple) for maple in maples
  requestAnimationFrame ->
    flutterDown(maples)

updatePosition = (maple) ->
  offset = maple.elem.offset()
  nextX = offset.left - maple.speedX
  nextY = offset.top + maple.speedY
  if nextY > $(window).height() or nextX < 0-maple.elem.width()
    top = 0-maple.elem.height()
    left = Math.floor(Math.random()*$(window).width())
  else
    top = nextY
    left = nextX

  maple.elem.offset({top: top, left: left})

appendMomiji = ->
  maple = 
    speedX : Math.random()
    speedY : Math.random()*3    
    elem : $('<div class="maple">')
      .css
        position: "absolute",
        top: Math.random() * $(window).height(),
        left: Math.random() * $(window).width()
        transform: "rotate(#{Math.random()*360}deg)"
      .appendTo $('body')