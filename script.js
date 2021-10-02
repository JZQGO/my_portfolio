$(function() {
  //トップへ戻る//
  $('#top-btn').click(function(){
    $('html, body').animate({
      'scrollTop': 0
    }, 300);
  });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position
    },500);
  }); 

  //人気メニュー//
  function toggleChangeBtn() {
    var menuIndex = $('.menu-img').index($('.active'));
    $('.change-btn').show();
    if (menuIndex == 0) {
      $('.prev-btn').hide();
    }else if (menuIndex == 3) {
      $('.next-btn').hide();
    }
  };
  
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    var clickedIndex = $('.index-btn').index($(this));
    $('.menu-img').eq(clickedIndex).addClass('active');
    toggleChangeBtn();
  });

  $('.change-btn').click(function() {
    var $displaymenu = $('.active');
    $displaymenu.removeClass('active');
    if ($(this).hasClass('next-btn')) {
      $displaymenu.next().addClass('active');
    } else {
      $displaymenu.prev().addClass('active')
    }
    toggleChangeBtn();
  });

  $('.how-to-make').click(function() {
    var $anwser = $(this).find('.text-contents')
    if ($anwser.hasClass('open')) {
      $anwser.removeClass('open');
      $anwser.fadeIn();
    }else {
      $anwser.addClass('open');
      $anwser.fadeOut();
    }
  })
  
// ICON //
  $('.iconmark').hover(
    function(){
      $(this).children('.fab').animate({
        'font-size':'30px'
      }, 300);
    },
    function(){
      $(this).children('.fab').animate({
        'font-size':'24px'
      }, 300);
    }
  );
})