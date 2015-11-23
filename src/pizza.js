// Write your Pizza Builder JavaScript in this file.
var price = 13;

function changePrice(e, suplemento){
  if(e.currentTarget.className.indexOf('active') > -1){
    price += suplemento
  }else {
    price -= suplemento
  }
}
$('.btn-pepperonni').on('click', function(event){
  $('.pep').toggle();
  $(event.currentTarget).toggleClass('active');
  changePrice(event, 1);
  $('#pepperonni').toggle();
});

$('.btn-green-peppers').on('click', function(event){
  $('.green-pepper').toggle();
  $(event.currentTarget).toggleClass('active');
  changePrice(event, 1);
  $('#pepper').toggle();
});

$('.btn-mushrooms').on('click', function(event){
  $('.mushroom').toggle();
  $(event.currentTarget).toggleClass('active');
  changePrice(event, 1);
  $('#mushroom').toggle();
});

$('.btn-sauce').on('click', function(event){
  $('.sauce').toggleClass('sauce-white');
  $(event.currentTarget).toggleClass('active');
  changePrice(event, 3);
  $('#sauce').toggle();
});

$('.btn-crust').on('click', function(event){
  $('.crust').toggleClass('crust-gluten-free');
  $(event.currentTarget).toggleClass('active');
  changePrice(event, 5);
  $('#crust').toggle();
});

$('.panel .btn').on('click', function(event){
    $('aside strong').text('$' + price)
});
