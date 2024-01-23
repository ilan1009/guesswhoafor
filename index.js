const msgs = ["לא אכלתי כלום היום", "אתה מת", "מי חבר שך'!", "גואטג'ו "]
console.log(msgs[0])

let i = 0;
function characterPlay(){
    var x = document.getElementsByClassName("bubble")[0];
    if (i >= msgs.length){
        i = 0;
        document.getElementsByClassName("guess-box")[0].style.visibility="visible";
        
    } 
    let msg = msgs[i++];

    
    var text = document.getElementById("character-text");
    text.textContent = msg;
    text.style.fontSize = "3vw";

    //var audio = new Audio('sounds/lie-detector-meme.mp3');
    //audio.play();
}

function toggleSpeechBubble() {
    console.log("Toggle speech bubble")
    var x = document.getElementsByClassName("bubble")[0];
    if (x.style.visibility == "hidden") {
        x.style.visibility = "visible";
      } else {
        x.style.visibility = "hidden";
      }
}

function cancel(){
    const x = document.getElementsByClassName("guess-box")[0];
    x.style.display = "none";
}

function showAnswer(){
    cancel(); // close window

    transition();
}
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }