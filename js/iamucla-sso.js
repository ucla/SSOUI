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