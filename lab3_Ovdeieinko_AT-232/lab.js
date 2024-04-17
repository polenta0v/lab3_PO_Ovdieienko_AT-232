let bord = document.querySelector('.bord');
let overlay = document.querySelector('.fon');
let open = document.querySelector('.but');
let close = document.querySelector('.close');

open.addEventListener('click', function () {
  fon.classList.add('active');
  bord.classList.add('active');

})

close.addEventListener('click', function () {
  fon.classList.remove('active');
  bord.classList.remove('active');

})

