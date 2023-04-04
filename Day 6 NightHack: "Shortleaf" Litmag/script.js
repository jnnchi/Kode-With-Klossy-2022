var button = $('.submit');
button.on('click', thankYou);

function thankYou(event) {
  event.preventDefault();
  var name = $('.name').val();
  var title = $('.title').val();
  $('.response').text(`Thanks for submitting \"${title}\", ${name}!`);
  var i = 0;
  var txt = "like a leaf in the wind you flutter, untouched, directionless, drifting like a log of wood at sea as if air could be as thick as water and like someday after long enough you will crash into the shore but your shores are like endings and not sanctuaries and yet they have not come so you wait like you are on the verge of waking up, like you are pulling through and not just being taken away, like away is home amid watercolor sunsets, the forests you might have come from, the trees and the mountains you can't stop to marvel at so you might have forgotten what they were like outside of a blur of color, oil pastel, when the wind picks up it smears into a galaxy, and there are things you can only describe when you cannot stop to absorb them fully, how brilliant the sun like firelight trickles into rainpuddles like liquid mirrors, how when you soar over fields of marigold and dandelion like hope you wouldn't rather it be any other way than directionless, drifting like a log of wood at sea as if air could be as thick as water and like someday after long enough you will crash into the shore but your shores are like endings and not sanctuaries and yet they have not come so you wait like you are on the verge of waking up, like you are pulling through and not just being taken away, like away is home amid watercolor sunsets, the forests you might have come from, the trees and the mountains you can't stop to marvel at so you might have forgotten what they were like outside of a blur of color, oil pastel, when the wind picks up it smears into a galaxy, and there are things you can only describe when you cannot stop to absorb them fully, how brilliant the sun like firelight trickles into rainpuddles like liquid mirrors, how when you soar over fields of marigold and dandelion like hope you wouldn't rather it be any other way than directionless, drifting like a log of wood at sea as if air could be as thick as water and like someday after long enough you will crash into the shore but your shores are like endings and not sanctuaries and yet they have not come so you wait like you are on the verge of waking up, like you are pulling through and not just being taken away, like away is home amid watercolor sunsets, the forests you might have come from, the trees and the mountains you can't stop to marvel at so you might have forgotten what they were like outside of a blur of color, oil pastel, when the wind picks up it smears into a galaxy, and there are things you can only describe when you cannot stop to absorb them fully, how brilliant the sun like firelight trickles into rainpuddles like liquid mirrors, how when you soar over fields of marigold and dandelion like hope you wouldn't rather it be any other way than free as if the simile will ever end.";
  var speed = 10; /* The speed/duration of the effect in milliseconds */
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}
