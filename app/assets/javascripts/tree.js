//INITIALIZE AND ANIMATE TREE V1
window.tree = {
  initialize: function() {
      $('.tree svg').each(function() {
          var delay, length, path, paths, previousStrokeLength, speed, _i, _len, _results;
          paths = $('path');
          delay = 0;
          _results = [];
          for (_i = 0, _len = paths.length; _i < _len; _i++) {
              path = paths[_i];
              length = path.getTotalLength();
              previousStrokeLength = speed || 0;
              speed = length < 100 ? 20 : 500;
              delay += previousStrokeLength;
              _results.push($(path).css('transition', 'none').attr('data-length', length).attr('data-speed', speed).attr('data-delay', delay).attr('stroke-dashoffset', length).attr('stroke-dasharray', length + ',' + length));
          }
          return _results;
      });
  },
  animate: function() {
      return $('.tree svg').each(function() {
          var delay, length, path, paths, speed, _i, _len, _results;
          paths = $('path');
          _results = [];
          for (_i = 0, _len = paths.length; _i < _len; _i++) {
              path = paths[_i];
              length = $(path).attr('data-length');
              speed = $(path).attr('data-speed');
              delay = $(path).attr('data-delay');
              _results.push($(path).css('transition', 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear').attr('stroke-dashoffset', '0'));
          }
          return _results;
      });
  } 
};

//CALL TO INITIALIZE AND ANIMATE TREE  
function updateTrees () {
  window.tree.initialize();
    setTimeout(function() {
        window.tree.animate();
    }, 500);
};

//INITIALIZE AND ANIMATE TREE V2
// $(function(){

// var hello = document.querySelector('#hello');
// var l = hello.getTotalLength();

// hello.style.strokeDasharray = l.toString() + ' ' + l.toString();
// hello.style.strokeDashoffset = l;

// hello.getBoundingClientRect();

// hello.style.opacity = 1;
// hello.style.strokeDashoffset = 0;


// });

//TESTING A NEW TREE ANIMATION

  $('#test').on("click", function (){
    $("#cartoon-tree").addClass('animated bounceIn');
});




