// paste your function that converts farenheit to celcius here:

function farenheitToCelsius(f) {
  let step1 = f - 32;
  let step2 = step1 * 5;
  let c = step2 / 9;
  return c;
}

$('#temperature-conversion-form').on('submit', function () {
  let f = $('#farenheit-input').val();
  let c = farenheitToCelsius(f);
  $('#answer').html(c);
});