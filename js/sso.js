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

/////////////////////////////////////////
///  countdown timer
/////////////////////////////////////////

// http://harshen.github.io/jquery-countdownTimer/
$(function(){
	$("#countdown").countdowntimer({
		minutes: 0,
		seconds: 59
	});
});