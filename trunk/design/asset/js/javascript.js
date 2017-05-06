$(function() {
    $('.p-close').click(function (e) {
        var modal = $(this).attr('data-close');
        $('#'+modal).hide();
        $('body').removeClass('p-modal-open');
        e.preventDefault();
    });
  
    $('.p-modal').click(function (e) {
        $(this).hide();
        $('body').removeClass('p-modal-open');
        e.preventDefault();
    });
    
    $('.p-modal-button').click(function (e) {
      var modal = $(this).attr('data-modal');
      $('#'+modal).show();
      $('body').addClass('p-modal-open');
      e.preventDefault();
    });
  
    $('.p-body').click(function(e){
        e.stopPropagation();
    });
});