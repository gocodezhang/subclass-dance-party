var makeDancer = function(top, left, timeBetweenSteps) {
  // this = object.create (makeDancer.prototype)
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);

};

makeDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this), timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};