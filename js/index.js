$(document).ready(function() {
    // Al hacer clic en un enlace del navbar
    $('.navbar-nav .nav-link').on('click', function() {
      // Remover la clase 'active' de todos los enlaces
      $('.navbar-nav .nav-link').removeClass('active');
      // Añadir la clase 'active' al enlace clickeado
      $(this).addClass('active');
    });
  });