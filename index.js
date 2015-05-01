$(function(){
  var colors = ['#1abc9c', '#27ae60', '#3498db', '#8e44ad', '#2c3e50',
  '#f1c40f', '#d35400', '#7f8c8d'];

  $('#shuffler span i').on('click', function(){
    var random = colors[Math.floor(Math.random() * colors.length)];
    $('body').css('background', random);
  });
});
