/////////////////////////////////////////
///     load & configure webshims
/////////////////////////////////////////
(function () {
  webshim.setOptions('forms', {
    //set lazyCustomMessages to true
    lazyCustomMessages: true,
    //show custom styleable validation bubble
    replaceValidationUI: true,
    handleBubble: 'hide',
    fieldWrapper: '.fieldset',
    iVal: {
      "recheckDelay": 100,
    }
  });
  
  //start polyfilling
  webshim.polyfill('forms');
})();

// hack for autofocus for logon input
$(document).ready(function() {
  $("input[name='logon']").focus();
}

/////////////////////////////////////////
///  disable submit when inputs empty
/////////////////////////////////////////

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

/////////////////////////////////////////
///  countdown timer
/////////////////////////////////////////

// http://harshen.github.io/jquery-countdownTimer/
$(function(){
	$("#countdown").countdowntimer({
		minutes : 5
	});
});