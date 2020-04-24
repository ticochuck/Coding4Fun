'use strict'

$('#hide').on('click', hideNames);
$('#show').on('click', showNames);
$('li').on('click', highlightName);

function showNames() {
  $('li').show();
}

function hideNames() {
  $('li').hide();
}

function highlightName() {
  $(this).css("color", "red");
}