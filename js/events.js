//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}
function frameIt() {
  $('.tasty').on('load', function() {
    
  })
}
function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which === 71) {
      alert('G was pressed down.')
    }
  })
}
function submitIt() {
  $('')
}
$(document).ready(function(){

// call functions here

});
