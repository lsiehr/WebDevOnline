function changeText() {
    document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
    document.getElementById("textChange").class="red";
   }
function ChangeCursor() {
    var myArray = [
        "wait",
        "move",
        "copy",
        "help",
        "pointer",
        "progress",
        "url",
        "text",
        "zoom-in",
        "zoom-out"
      ];
      
      var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    document.body.style.cursor = randomItem;
    }
    var has = false;    
function FocusText(s) {

    if (has == false) {
        alert("Your cursor is in a text box");
        has = true;
    }

}
function Resize() {
    alert("You have resized the browser window");
}
function DC() {
    document.getElementById("DCT").innerHTML = "Hello World";
  }
function KeyStroke() {
    alert("You have typed in the text box.");
}
function SelectText() {

    document.getElementById("textOutput").innerHTML = window.getSelection().toString();
}
   var space = " ";
   var pos = 0;
   var msg = "User 19";
   
   function Scroll(){
   document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);
   
   pos++;
   if (pos > msg.length) pos = 0;
   window.setTimeout("Scroll()", 0);
   }
   Scroll();
   function playPauseVideo() {
    let videos = document.querySelectorAll("video controls");
    videos.forEach((video) => {
        // We can only control playback without insteraction if video is mute
        video.muted = true;
        // Play is a promise so we need to check we have it
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                let observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.intersectionRatio !== 1 &&
                                !video.paused
                            ) {
                                video.pause();
                            } else if (video.paused) {
                                video.play();
                            }
                        });
                    },
                    { threshold: 0.2 }
                );
                observer.observe(video);
            });
        }
    });
}
var index = 0;
function submit(event, value) {
    if (event.key == "Enter") {
            document.getElementById("list").innerHTML = document.getElementById("list").innerHTML + "<p id='" + index + "'>" + value + "</p>" + "<button id=b" + index + " type='button' onclick='Delete(`" + index + "`)'>Delete</button>";
    index = index + 1;
    }

}
function Delete(id) {
document.getElementById(id).remove();
    var ID = 'b' + id
document.getElementById(ID).remove();
}