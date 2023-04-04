
// Gets the element with the id "defaultOpen" and clicks it automatically when the website is opened
document.getElementById("defaultOpen").click();

// Opens pages when user clicks the tabs
function openPage(pageName, elmnt) {
  // Hides all elements of the class "tabcontent"
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Shows the content of the desired tab
  document.getElementById(pageName).style.display = "block";

  // Animates page contents by making them slowly appear
  $('.tabcontent').animate({ opacity: 1 }, "slow", makeOpaque());
  function makeOpaque() {
    $('.tabcontent').animate({ opacity: 1 });
  }
}

var submitButton = $('.submit')

submitButton.on('click', placeImage);

function placeImage(event) {
  event.preventDefault();
  var artistName = $(".artist_name").val();
  var description = $(".description").val();
  var file = $("file_upload");
  // gets all radios with name art-form
  const artistTypes = document.querySelectorAll('input[name="art_form"]');

  for(const type of artistTypes) {
    // checks which art form is checked and stores it
    if(type.checked) {
      var finalType = type.value;
      break;
    }
  }
  var result = $('.result');
  result.append(`Hi ${artistName} the ${finalType}! Thank you for submitting your work: ${description}!`);
}

var poemBtn = $('.view-poem');
poemBtn.on('click', poem);

function poem(event) {
  event.preventDefault();
  var i = 0;
  var txt = "like a leaf in the wind you flutter, untouched, directionless, drifting like a log of wood at sea as if air could be as thick as water and like someday after long enough you will crash into the shore but your shores are like endings and not sanctuaries and yet they have not come so you wait like you are on the verge of waking up, like you are pulling through and not just being taken away, like away is home amid watercolor sunsets, the forests you might have come from, the trees and the mountains you can't stop to marvel at so you might have forgotten what they were like outside of a blur of color, oil pastel, when the wind picks up it smears into a galaxy, and there are things you can only describe when you cannot stop to absorb them fully, how brilliant the sun like firelight trickles into rainpuddles like liquid mirrors, how when you soar over fields of marigold and dandelion like hope you wouldn't rather it be any other way than free as if the simile will ever end so ";
  var speed = 20; /* The speed/duration of the effect in milliseconds */
  
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById("poem").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}

function show(thingID) {
  /* Access image by id and change
    the display property to block*/
    document.getElementById(thingID)
            .style.display = "block";
}

function clear() {
  var eles = document.getElementsByClassName("to-clear");
  for (var ele of eles) {
    ele.style.display = "none";
  }
  console.log('cleared');
}