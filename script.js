$(document).ready(function () {
  // Cambiar a modo claro
  $('#btnClaro').click(function () {
    $('body').removeClass('modo-oscuro').addClass('modo-claro');
  });

  // Cambiar a modo oscuro
  $('#btnOscuro').click(function () {
    $('body').removeClass('modo-claro').addClass('modo-oscuro');
  });
});
