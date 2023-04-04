var MakeGrowyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="growydancer"></span>');
  this.setPosition(top, left);
  this.step();
};

MakeGrowyDancer.prototype = Object.create(makeDancer.prototype);
MakeGrowyDancer.prototype.constructor = MakeGrowyDancer;
MakeGrowyDancer.prototype.step = function() {
  $('.body').css('background-color', '#fff');

  // $('dancer').css('border-radius', function(radius) {
  //   return radius - 10;
  // });
  //grow insize
  //decrease in size
  //loop
  //recurse with setTimeOut
};
