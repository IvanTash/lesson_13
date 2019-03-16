$(document).ready(function() {
  var button = $('#button');
  var modal = $('#modal');
  var close = $('#close');
  var all = $('#all')

  button.on('click', function() {
    modal.addClass('modal_active');
    modal.addClass('all_active');
  });
  close.on('click', function() {
    modal.removeClass('modal_active');
  });
});

function func() {
  modal.classList.remove('modal_active');
};

setInterval(func, 5000);