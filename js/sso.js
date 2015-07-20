/////////////////////////////////////////
///  countdown timer
/////////////////////////////////////////

var count = 60;
var counter = setInterval(timer, 1000);

function timer()
{
  count = count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     //counter ended, do something here
     return;
  }

 document.getElementById("countdown").innerHTML = count + " seconds";
}