$(function(){
  var $items1 = $('.photos1 img');
  var $items2 = $('.photos2 img');

  $('.photos1').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        }
    },
    onInitialized: function(){
      equalHeight($items1);
    }
});

$('.photos2').owlCarousel({
  loop:true,
  margin:10,
  responsive:{
      0:{
          items:1
      }
  },
  onInitialized: function(){
    equalHeight($items2);
  }
});

  function equalHeight($items){
    var max = 0;

    $items.each(function(){
      var h = $(this).height();
      console.log(h);
      if(h > max){
        max = h;
      }
    });
    console.log(max);
    $items.css('height', max + 'px');
  }



});
