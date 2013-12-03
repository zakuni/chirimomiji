flutterDown = (maples) ->
  updatePosition(maple) for maple in maples
  requestAnimationFrame ->
    flutterDown(maples)

updatePosition = (maple) ->
  offset = maple.elem.offset()
  nextX = offset.left - maple.speedX
  nextY = offset.top + maple.speedY
  if nextY > $(window).height() or nextX < 0
    top = 0
    left = Math.floor(Math.random()*$(window).width())
  else
    top = nextY
    left = nextX

  maple.elem.offset({top: top, left: left})

appendMomiji = ->
  maple = 
    elem : $('<div class="maple">')
      # .width(Math.random()*10+15)
      # .height(Math.random()*5+15)
      .appendTo $('body')
      .css
        position: "absolute",
        top: Math.random() * $(window).height(),
        left: Math.random() * $(window).width()
    speedX : Math.random()
    speedY : Math.random()*3

$ ->
  maples = (appendMomiji() for [1..20])
  requestAnimationFrame ->
    flutterDown(maples)