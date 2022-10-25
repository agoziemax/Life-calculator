function lifeInWeeks() {
  let age = document.querySelector('#age').value;
  var yearsLeft = 90 - age;
  var maxDays = 365 * yearsLeft;
  var weeks = 52 * yearsLeft;
  var months = 12 * yearsLeft;

  document.querySelector('#output').style.transition = '5s';
  setTimeout(() => {
    /* Code to run after 4 seconds */
    document.querySelector('#output').innerHTML =
      'You have ' + maxDays + ' days,' + ' ' + weeks + ' weeks,' + ' and ' + months + ' months ' + 'left.';
  }, 4000);
  $(function () {
    $('#loaderModal').modal('show');
    setTimeout(function () {
      $('#loaderModal').modal('hide');
    }, 3000);
  });
}

// setTimeout(function () {
//   //your code here
// }, 1000);
//  lifeInWeeks(30);

let button = document.getElementById('calculateBtn');
button.addEventListener('click', lifeInWeeks);
