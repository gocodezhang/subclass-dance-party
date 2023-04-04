var makeDancer = function(top, left, timeBetweenSteps) {
  // this = object.create (makeDancer.prototype)
  this.$node = $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);

};

makeDancer.prototype.step = function(timeBetweenSteps) {
  console.log('this is from dancer')
  setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};