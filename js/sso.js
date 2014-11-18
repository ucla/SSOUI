// initialize placholdr

$(function () {
	$(document).placeholdr();
});

// js autofocus for older browsers

$(function () {
	if (!("autofocus" in document.createElement("input"))) {
		document.getElementById("logon").focus();
	}
});

// disable submit if inputs not filled

$(document).ready(function() {
	var $submit = $("button[type=submit]"),
	  $inputs = $('input[type=text], input[type=password]');
	
	function checkEmpty() {
		// filter over the empty inputs
		return $inputs.filter(function() {
		    return !$.trim(this.value);
		}).length === 0;
	}
	
	$inputs.on('keyup blur', function() {
		$submit.prop("disabled", !checkEmpty());
	}).blur(); // trigger an initial blur
});