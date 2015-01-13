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
              speed = length < 100 ? 20 : Math.floor(length);
              delay += previousStrokeLength + 100;
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
$(function() {
  //INITIALIZE AND ANIMATE TREE  
  window.tree.initialize();
  $('#button-submit').
  on('click', function() {
      window.tree.initialize();
      setTimeout(function() {
          window.tree.animate();
      }, 500);
  });

  //PRINT OUT MULTIPLE TREES

  for ( i = 0; i < 10; i++ ){
    var treeTemplate = $("#tree-template").html();
    $(".tree").append(treeTemplate);
  }
});

// if <10 then
// $("#tree").append. ul and li x 10 (display inline) and give an id for each one
// and then loop over each one and .append (<%render 'tree'%>)

// else

//   <20 then
// $("#tree").append. (ul and li x 10) x 2 and give an id for each one
// and then loop over each one and .append (<%render 'tree'%>)
//  else
//  <20 then
// $("#tree").append. (ul and li x 10) x 2 and give an id for each one
// and then loop over each one and .append (<%render 'tree'%>)
