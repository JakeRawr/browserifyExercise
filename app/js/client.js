'use strict';
var $ = require('jquery');
var add = require('./add');
var sub = require('./sub');
var mul = require('./mul');

$('#cal').append('<p>This web site performs simple addition, subtraction, and multiplication</p>');

$('#button1').on('click', function() {
  var num1 = $('#num1').val();
  var num2 = $('#num2').val();
  alert(num1 + ' + ' + num2 + ' = ' + add(num1, num2));
});

$('#button2').on('click', function() {
  var num1 = $('#num3').val();
  var num2 = $('#num4').val();
  alert(num1 + ' - ' + num2 + ' = ' + sub(num1, num2));
});

$('#button3').on('click', function() {
  var num1 = $('#num5').val();
  var num2 = $('#num6').val();
  alert(num1 + ' * ' + num2 + ' = ' + mul(num1, num2));
});
