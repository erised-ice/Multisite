var $buttonsOpenMenuCollection = document.querySelectorAll('.js-open-menu');

$buttonsOpenMenuCollection.forEach(function($element) {
  $element.addEventListener('click', function() {
    $element.nextElementSibling.classList.toggle('menu--show')
  })
})
